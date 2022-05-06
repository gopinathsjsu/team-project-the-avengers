import React, { useState, useEffect } from 'react';
import LocationCard from './LocationCard';
import './AdminPage.css';

function AdminLocationTable() {
  const [locations, setLocations] = useState([]);

  const l = [
    {
      location: "San Jose",
      King_Suite: 100,
      Queen_Suite: 100,
      Junior_Suite: 100,
      Queen_Deluxe: 100
    },
    {
      location: "San Diego",
      King_Suite: 100,
      Queen_Suite: 100,
      Junior_Suite: 100,
      Queen_Deluxe: 100
    }
  ];  /* test data, will delete later */

  useEffect (() => {
    setLocations(l);
      /* fetch all location information from backend */
  }, []);
  
  return (
    <>
      <div className='location-table'>
        <h1>Location Table</h1>
        <div className='header'>
          <div className='location-table-column-header'>Location</div>
          <div className='location-table-column-header'>King Suite</div>
          <div className='location-table-column-header'>Queen Suite</div>
          <div className='location-table-column-header'>Junior Suite</div>
          <div className='location-table-column-header'>Queen Deluxe</div>
          <div className='location-table-button-column'></div>
        </div>
        {locations.map((location) => (
          <LocationCard
            key={location.location}
            location={location.location}
            kingSuite={location.King_Suite}
            queenSuite={location.Queen_Suite}
            juniorSuite={location.Junior_Suite}
            queenDeluxe={location.Queen_Deluxe}
          />
        ))}
      </div>
    </>
  )
}

export default AdminLocationTable