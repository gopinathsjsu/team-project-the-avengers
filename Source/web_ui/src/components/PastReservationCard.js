import React from 'react';
import './PastReservationCard.css';

const PastReservationCard = ({id, roomNumber, roomType, location, checkIn, checkOut, price, amenities, guests}) => {
  return (
    <>
      <div className='past-reservation-card-heading'>
        <div className='reservation-info'>
          <div className='reservation-card-label'>Location:</div>&nbsp;
          <div>{location}</div>
        </div>
        <div className='reservation-info'>
          <div className='reservation-card-label'>Check-In Date:</div>&nbsp;
          <div>{checkIn}</div>
        </div>
        <div className='reservation-info'>
          <div className='reservation-card-label'>Check-Out Date:</div>&nbsp;
          <div>{checkOut}</div>
        </div>
      </div>
      <div className='past-reservation-card'>
        <div className='past-reservation-card-column-container'>
          <div className='reservation-info'>
            <div className='reservation-card-label'>Room Type:</div>&nbsp;
            <div>{roomType.replace('_', ' ')}</div>
          </div>
          <div className='reservation-info'>
            <div className='reservation-card-label'>Room Number:</div>&nbsp;
            <div>{roomNumber}</div>
          </div>
          <div className='reservation-info'>
            <div className='reservation-card-label'>Number of Guests:</div>&nbsp;
            <div>{guests}</div>
          </div>
        </div>
        <div className='past-reservation-card-column-container'>
          <div className='reservation-info amenities-column'>
            <div className='reservation-card-label'>Selected Amenities:</div>
            {amenities.split(', ')?.map((amenity) => (
            <div key={amenity}>{amenity}</div>
            ))}
          </div>
        </div>
        <div className='past-reservation-card-column-container'>
          <div className='reservation-info'>
            <div className='reservation-card-label'>Total:</div>&nbsp;
            <div>${price}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PastReservationCard