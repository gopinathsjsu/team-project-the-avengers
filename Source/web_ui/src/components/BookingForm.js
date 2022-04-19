import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState('');
  const [guests, setGuests] = useState(1);

  const loc = useLocation();

  useEffect(() => {
    /* get data entered on search page */
    const data = loc.state;
    console.log(data);
    setLocation(data.location);
    setRoomType(data.roomType);
    setCheckIn(data.checkIn);
    setCheckOut(data.checkOut);
    setRoomID(data.roomID)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div className='booking-form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label>Location</label>
            {location}
          </div>
          <div className='form-input'>
            <label>Room Type</label>
            {roomType}
          </div>
          <div className='date-container'>
            <div className='form-input check-in-input'>
                <label>Check-In Date</label>
                {checkIn}
            </div>
            <div className='form-input check-out-input'>
                <label>Check-Out Date</label>
                {checkOut}
            </div>
          </div>
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
          <input className='orange-button' type='submit' value='Confirm'></input>
        </form>
      </div>
    </>
  )
}

export default BookingForm