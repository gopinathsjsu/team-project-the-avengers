import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState(0);
  const [guests, setGuests] = useState(1);

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try{
      /* get data entered on search page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
    } catch (err) {
      navigate('/search');
    }
  }, [loc.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      start_date: checkIn,
      end_date: checkOut,
      location: location,
      room_type: roomType,
      no_of_guests: guests,
    };

    axios.post('', info).then(response => {
      console.log(response);
      const data = {
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        roomType: roomType,
        roomID: roomID,
        guests: guests,
        total: response.data.price,
      };

      navigate('/payment', {state: data})
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <div className='booking-form-container'>
        <div className='form-input'>
          <label>Location</label>
          {location}
        </div>
        <div className='form-input'>
          <label>Room Type</label>
          {roomType.replace('_', ' ')}
        </div>
        <div className='date-container'>
          <div className='form-input'>
              <label>Check-In Date</label>
              {checkIn}
          </div>
          <div className='form-input'>
              <label>Check-Out Date</label>
              {checkOut}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='guests_number'>Number of Guests</label>
            <input id='guests_number' type='number' min='1' onChange={(e) => setGuests(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label>Amenities</label>
            <div className='amenity-option'>
              <input id='daily-breakfast' type='checkbox' className='amenity-checkbox' value='Daily Continental Breakfast'></input>
              <label className='amenity-label' for='daily-breakfast'>Daily Continental Breakfast</label>
            </div>
            <div className='amenity-option'>
              <input id='fitness-room' type='checkbox' className='amenity-checkbox' value='Access to fitness room'></input>
              <label className='amenity-label' for='fitness-room'>Access to fitness room</label>
            </div>
            <div className='amenity-option'>
              <input id='swimming-pool-jacuzzi' type='checkbox' className='amenity-checkbox' value='Access to Swimming Pool/Jacuzzi'></input>
              <label className='amenity-label' for='swimming-pool-jacuzzi'>Access to Swimming Pool/Jacuzzi</label>
            </div>
            <div className='amenity-option'>
              <input id='parking' type='checkbox' className='amenity-checkbox' value='Daily Parking'></input>
              <label className='amenity-label' for='parking'>Daily Parking</label>
            </div>
            <div className='amenity-option'>
              <input id='all-meals' type='checkbox' className='amenity-checkbox' value='All meals included'></input>
              <label className='amenity-label' for='all-meals'>All meals included</label>
            </div>
          </div>
          <button className='orange-button' type='submit'>Next</button>
        </form>
      </div>
    </>
  )
}

export default BookingForm