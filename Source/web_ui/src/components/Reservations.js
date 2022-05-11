import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationCard from './ReservationCard';
import { isAuthenticated } from './auth';
import './Reservations.css';

function Reservations() {
  const { token } = isAuthenticated();
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const headers = {
      'x-access-token': token
    }
    async function fetchReservations() {
      await axios.post('/viewBookings', {token: token}, headers).then(response => {
        setReservations(response.data);
        // console.log(response);
      }).catch(error => {
        setErrorMessage('Unauthorized Access');
        console.log(error);
      })
      setIsLoading(false);
    }

    fetchReservations();
  }, [token]);

  return (
    <>
      {!isLoading && !errorMessage ? (
        <div className='reservations-container'>
          <h1>Your Reservations</h1>
          {reservations.length > 0 ? (
            <div>
              {/* <div className='header'>
                <div className='room-number-column-header'>Room #</div>
                <div className='column-header'>Room Type</div>
                <div className='column-header'>Location</div>
                <div className='column-header'>Check-in Date</div>
                <div className='column-header'>Check-out Date</div>
                <div className='price-column-header'>Price</div>
                <div className='button-column'></div>
              </div> */}
              {reservations.map((reservation) => (
                <ReservationCard
                  key={reservation.id}
                  id={reservation.id}
                  roomNumber={reservation.room_no}
                  roomType={reservation.room_type}
                  location={reservation.location}
                  checkIn={reservation.start_date.split("T")[0]}
                  checkOut={reservation.end_date.split("T")[0]}
                  price={reservation.price}
                  amenities={reservation.Amenities}
                  guests={reservation.guests}
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
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  )
}

export default Reservations