import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({id, roomNumber, roomType, location, checkIn, checkOut, price}) => {
  const cancelReservation = () => {
    /* make a delete request to backend to cancel reservation here */
  }

  return (
    <div className='reservation-card'>
      <div className='reservation-room-number'>{roomNumber}</div>
      <div className='reservation-info'>{roomType}</div>
      <div className='reservation-info'>{location}</div>
      <div className='reservation-info'>{checkIn}</div>
      <div className='reservation-info'>{checkOut}</div>
      <div className='reservation-price'>{price}</div>
      <button className='cancel-button' onClick={cancelReservation}>Cancel Reservation</button>
    </div>
  )
}

export default ReservationCard