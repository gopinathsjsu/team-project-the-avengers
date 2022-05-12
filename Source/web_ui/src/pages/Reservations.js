import React from 'react';
import CurrentReservations from '../components/CurrentReservations';
import PastReservations from '../components/PastReservations';

function Reservations() {
  return (
    <>
      <CurrentReservations />
      <PastReservations />
    </>
  )
}

export default Reservations