import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './BookingDetails.css';

function EditReservationConfirmation() {
  const [id, setId] = useState('');
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomNumber, setRoomNumber] = useState(0);
  const [guests, setGuests] = useState(1);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedAmenityNames, setSelectedAmenityNames] = useState([]);
  const [oldPrice, setOldPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.state) {
      /* get reservation data passed from previous page */
      const data = loc.state;
      console.log(data);
      setId(data.id);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomNumber(data.roomNumber);
      setGuests(data.guests);
      setSelectedAmenities(data.selectedAmenities);
      setSelectedAmenityNames(data.selectedAmenityNames);
      setOldPrice(data.oldPrice);
      setTotal(data.total);
    } else {
      navigate('/reservations');
    }
  }, [loc.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { token } = isAuthenticated();
    
    const info = {
      token: token,
      id: id,
      amenities: selectedAmenityNames.join(', '),
      guests: guests,
      oldPrice: oldPrice,
      price: total
    };

    const headers = {
      'x-access-token': token
    }

    axios.post('/updateReservation', info, headers).then(response => {
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
    navigate('/reservations');
  }

  return (
    <div>
      <div className='booking-details-container'>
        {success
          ? <div className='success-message'>Reservation has been changed successfully.</div>
          : <> </>
        }
        <h1>Confirm your changes</h1>
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
            {roomNumber}
          </div>
          <div className='form-input'>
            <label>Number of Guests</label>
            {guests}
          </div>
        </div>
        <div className='form-input'>
          <div className='total-container'>
            <label>Selected Amenities:</label>&nbsp;{selectedAmenityNames.join(', ')}
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
            <button className='home-button' onClick={handleClick}>Go Back to Reservations page</button>
          ) : (
            <button className='orange-button confirm-button' type='submit' onClick={handleSubmit}>Confirm</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditReservationConfirmation