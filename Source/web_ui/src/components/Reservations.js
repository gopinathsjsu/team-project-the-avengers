import React from 'react';
import ReservationCard from './ReservationCard';
import './Reservations.css';

function Reservations() {
  // const [reservations, setReservations] = useState([]);

  const reservations = [
    {
      id: 1,
      roomNumber: 1,
      roomType: "Queen_Deluxe",
      location: "San Jose",
      checkIn: "2022-04-21",
      checkOut: "2022-04-21",
      price: "300",
    },
    {
      id: 2,
      roomNumber: 3,
      roomType: "Queen_Deluxe",
      location: "San Jose",
      checkIn: "2022-04-29",
      checkOut: "2022-05-01",
      price: "500",
    },
  ];  /* test data, will delete later */

  return (
    <>
      <div className='reservations-container'>
        <h1>Your Reservations</h1>
        {reservations.length > 0 ? (
          <div>
            <div className='header'>
              <div className='column-header'>Room Number</div>
              <div className='column-header'>Room Type</div>
              <div className='column-header'>Location</div>
              <div className='column-header'>Check-in Date</div>
              <div className='column-header'>Check-out Date</div>
              <div className='column-header'>Price</div>
              <div className='button-column'></div>
            </div>
            {reservations.map((reservation) => (
              <ReservationCard
                id={reservation.id}
                roomNumber={reservation.roomNumber}
                roomType={reservation.roomType}
                location={reservation.location}
                checkIn={reservation.checkIn}
                checkOut={reservation.checkOut}
                price={reservation.price}
              />
            ))}
          </div>
        ) : (
          <div>You do not have any reservations.</div>
        )}
      </div>
    </>
  )
}

export default Reservations