import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationCard from './ReservationCard';
import './Reservations.css';

function Reservations() {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchReservations() {
      await axios.post('http://localhost:3000/viewBookings', {user_id: 1}).then(response => {
        setReservations(response.data);
        console.log(response);
      }).catch(error => {
        console.log(error);
      })
      setIsLoading(false);
    }

    fetchReservations();
  }, []);

  return (
    <>
      <div className='reservations-container'>
        <h1>Your Reservations</h1>
        {reservations.length > 0 ? (
          <div>
            <div className='header'>
              <div className='room-number-column-header'>Room #</div>
              <div className='column-header'>Room Type</div>
              <div className='column-header'>Location</div>
              <div className='column-header'>Check-in Date</div>
              <div className='column-header'>Check-out Date</div>
              <div className='price-column-header'>Price</div>
              <div className='button-column'></div>
            </div>
            {reservations.map((reservation) => (
              <ReservationCard
                id={reservation.id}
                roomNumber={reservation.room_no}
                roomType={reservation.room_type.replace('_', ' ')}
                location={reservation.location}
                checkIn={reservation.start_date.split("T")[0]}
                checkOut={reservation.end_date.split("T")[0]}
                price={reservation.price}
              />
            ))}
          </div>
        ) : (
          <div>
            {!isLoading
              ? <div>You do not have any reservations.</div>
              : <> </>
            }
          </div>
        )}
      </div>
    </>
  )
}

export default Reservations