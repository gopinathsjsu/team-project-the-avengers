import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAdmin } from '../auth';
import LocationCard from './LocationCard';
import './AdminPage.css';

function AdminLocationTable() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLocationTable() {
      const { token } = isAdmin();
      await axios.post('/getRooms', {token: token}).then(response => {
        console.log(response);
        setLocations(response.data);
      }).catch(error => {
        console.log(error);
      })
      setLoading(false);
    }

    fetchLocationTable();
  }, []);
  
  return (
    <>
      {!loading ? (
        <div className='location-table'>
          <h1>Number of Rooms</h1>
          <div className='header'>
            <div className='location-table-column-header'>Location</div>
            <div className='location-table-column-header'>King Suite</div>
            <div className='location-table-column-header'>Queen Suite</div>
            <div className='location-table-column-header'>Junior Suite</div>
            <div className='location-table-column-header'>Queen Deluxe</div>
            <div className='location-table-button-column'></div>
          </div>
          {locations?.map((location) => (
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
      ) : (
        <> </>
      )}
    </>
  )
}

export default AdminLocationTable