import React from 'react';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './ReservationCard.css';

const ReservationCard = ({id, roomNumber, roomType, location, checkIn, checkOut, price}) => {
  const cancelReservation = (e) => {
    const { token } = isAuthenticated();
    
    const info = {
      token: token,
      transaction_id: id
    };

    const headers = {
      'x-access-token': token
    }

    axios.post('/deleteBookings', info, headers).then(response => {
      // console.log(response);
      window.location.reload();
    }).catch(error => {
      // console.log(error);
      alert('Sorry, something went wrong. Please try again later.');
    })
  }

  return (
    <div className='reservation-card'>
      <div className='reservation-room-number'>{roomNumber}</div>
      <div className='reservation-info'>{roomType}</div>
      <div className='reservation-info'>{location}</div>
      <div className='reservation-info'>{checkIn}</div>
      <div className='reservation-info'>{checkOut}</div>
      <div className='reservation-price'>{price}</div>
      <button className='cancel-reservation-button' onClick={cancelReservation}>Cancel Reservation</button>
    </div>
  )
}

export default ReservationCard