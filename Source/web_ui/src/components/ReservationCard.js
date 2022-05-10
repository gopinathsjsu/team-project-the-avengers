import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './ReservationCard.css';

const ReservationCard = ({id, roomNumber, roomType, location, checkIn, checkOut, price, amenities, guests}) => {
  const navigate = useNavigate();
  
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
      alert(error.response.data.status?error.response.data.status: 'Sorry, something went wrong. Please try again later.');
    })
  }

  const editReservation = () => {
    const data = {
      id: id,
      location: location,
      checkIn: checkIn,
      checkOut: checkOut,
      roomType: roomType,
      roomNumber: roomNumber,
      guests: guests,
      amenities: amenities,
      price: price
    };

    navigate('/reservations/edit', {state: data})
  }

  return (
    <>
      <div className='reservation-card-heading'>
        <div className='reservation-card-heading-info'>
          <div class='reservation-info'>
            <div className='reservation-card-label'>Location:</div>&nbsp;
            <div>{location}</div>
          </div>
          <div class='reservation-info'>
            <div className='reservation-card-label'>Check-In Date:</div>&nbsp;
            <div>{checkIn}</div>
          </div>
          <div class='reservation-info'>
            <div className='reservation-card-label'>Check-Out Date:</div>&nbsp;
            <div>{checkOut}</div>
          </div>
        </div>
        <div className='reservation-card-heading-button-column'></div>
      </div>
      <div className='reservation-card'>
        <div className='reservation-info-container'>
          <div className='reservation-card-column-container'>
            <div className='reservation-info'>
              <div className='reservation-card-label'>Room Type:</div>&nbsp;
              <div>{roomType}</div>
            </div>
            <div class='reservation-info'>
              <div className='reservation-card-label'>Room Number:</div>&nbsp;
              <div>{roomNumber}</div>
            </div>
            <div class='reservation-info'>
              <div className='reservation-card-label'>Number of Guests:</div>&nbsp;
              <div>{guests}</div>
            </div>
          </div>
          <div className='reservation-card-column-container'>
            <div class='reservation-info amenities-column'>
              <div className='reservation-card-label'>Selected Amenities:</div>
              {amenities.split(', ')?.map((amenity) => (
                <div>{amenity}</div>
              ))}
            </div>
          </div>
          <div className='reservation-card-column-container'>
            <div class='reservation-info'>
              <div className='reservation-card-label'>Total:</div>&nbsp;
              <div>${price}</div>
            </div>
          </div>
        </div>
        <div className='edit-cancel-reservation-button-container'>
          {/* <button className='edit-reservation-button' onClick={editReservation}>Edit</button> */}
          <button className='cancel-reservation-button' onClick={cancelReservation}>Cancel Reservation</button>
        </div>
      </div>
    </>
  )
}

export default ReservationCard