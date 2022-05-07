import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelCard from './HotelCard';
import './AdminPage.css';

function AdminHotelTable() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotelTable() {
      await axios.post('/getHotel').then(response => {
        // console.log(response);
        setHotels(response.data);
      }).catch(error => {
        console.log(error);
      })
      setLoading(false);
    }

    fetchHotelTable();
  }, []);
  
  return (
    <>
      {!loading ? (
        <div className='hotel-table'>
          <h1>Hotel</h1>
          <div className='header'>
            <div className='hotel-table-column-header'>Location</div>
            <div className='hotel-table-column-header'>Multiplier</div>
            <div className='hotel-table-column-header'>Weekend Rate</div>
            <div className='hotel-table-column-header'>Season Rate</div>
            <div className='hotel-table-column-header'>From Date</div>
            <div className='hotel-table-column-header'>To Date</div>
            <div className='hotel-table-button-column'></div>
          </div>
          {hotels?.map((hotel) => (
            <HotelCard
              key={hotel.location}
              location={hotel.location}
              multiplier={hotel.multiplier}
              weekendRate={hotel.weekend_rate}
              seasonRate={hotel.season_rate}
              fromDate={hotel.from_date.split("T")[0]}
              toDate={hotel.to_date.split("T")[0]}
            />
          ))}
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default AdminHotelTable