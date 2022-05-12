import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PastReservationCard from './PastReservationCard';
import { isAuthenticated } from './auth';
import './Reservations.css';

function PastReservations() {
  const [pastReservations, setPastReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const { token } = isAuthenticated();
    const headers = {
      'x-access-token': token
    }
    async function fetchPastReservations() {
      await axios.post('/viewPastBookings', {token: token}, headers).then(response => {
        setPastReservations(response.data);
        // console.log(response);
      }).catch(error => {
        setErrorMessage('Unauthorized Access');
        console.log(error);
      })
      setIsLoading(false);
    }

    fetchPastReservations();
  }, []);

  return (
    <>
      {!isLoading && !errorMessage ? (
        <div className='reservations-container'>
          <h1>Past Reservations</h1>
          {pastReservations.length > 0 ? (
            <div>
              {pastReservations.map((reservation) => (
                <PastReservationCard
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
                ? <div>You do not have any past reservations.</div>
                : <> </>
              }
            </div>
          )}
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default PastReservations