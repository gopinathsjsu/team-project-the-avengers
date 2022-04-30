import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookingDetails.css';

function BookingDetails() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState(0);
  const [guests, setGuests] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [amenitiesInfo, setAmenitiesInfo] = useState({});
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.state) {
      /* get data entered on search and booking page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
      setGuests(data.guests);
      setSelectedAmenities(data.selectedAmenities);
      setAmenitiesInfo(data.amenitiesInfo);
      setTotal(data.total);
    } else {
      navigate('/search');
    }
  }, [loc.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      room_no: roomID,
      room_type: roomType,
      location: location,
      start_date: checkIn,
      end_date: checkOut,
      amenities: selectedAmenities,
      no_of_guests: guests,
      user_id: 1,
      price: total
    };

    axios.post('http://localhost:3000/createBooking', info).then(response => {
      console.log(response);
      setErrorMessage('');
      setSuccess(true);
    }).catch(error => {
      console.log(error);
      setErrorMessage('Sorry, something went wrong. Please try again later.');
      setSuccess(false);
    })
  }

  const handleClick = (e) => {
    navigate('/');
  }

  return (
    <div>
      <div className='booking-details-container'>
        {success
          ? <div className='success-message'>Booking Confirmed</div>
          : <> </>
        }
        <h1>Booking Details</h1>
        <div className='booking-details-row-container'>
          <div className='form-input'>
            <label>Location</label>
            {location}
          </div>
          <div className='form-input'>
            <label>Check-In Date</label>
            {checkIn}
          </div>
          <div className='form-input'>
            <label>Check-Out Date</label>
            {checkOut}
          </div>
        </div>
        <div className='booking-details-row-container'>
          <div className='form-input'>
            <label>Room Type</label>
            {roomType.replace('_', ' ')}
          </div>
          <div className='form-input'>
            <label>Room Number</label>
            {roomID}
          </div>
          <div className='form-input'>
            <label>Number of Guests</label>
            {guests}
          </div>
        </div>
        <div className='form-input'>
          <div className='total-container'>
            <label>Selected Amenities:</label>&nbsp;{Object.values(amenitiesInfo).filter(amenity => amenity !== '').join(', ')}
          </div>
        </div>
        <div className='form-input'>
          <div className='total-container'>
            <label>Total:</label>&nbsp;${total}
          </div>
        </div>
        <div className='center'>
          <div className='error-message'>{errorMessage}</div>
          {success ? (
            <button className='home-button' onClick={handleClick}>Go Back to Home page</button>
          ) : (
            <button className='orange-button confirm-button' type='submit' onClick={handleSubmit}>Confirm Booking</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingDetails