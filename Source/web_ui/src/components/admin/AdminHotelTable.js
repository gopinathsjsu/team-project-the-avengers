import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAdmin } from '../auth';
import HotelCard from './HotelCard';
import AdminAddLocationButton from './AdminAddLocationButton';
import './AdminPage.css';

function AdminHotelTable() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchHotelTable() {
      const { token } = isAdmin();
      await axios.post('/getHotel', {token: token}).then(response => {
        // console.log(response);
        setHotels(response.data);
      }).catch(error => {
        setErrorMessage(error.response.data.message?error.response.data.message: 'Something went wrong. Please try again leter.');
        // console.log(error);
      })
      setLoading(false);
    }

    fetchHotelTable();
  }, []);
  
  return (
    <>
      {!loading && !errorMessage ? (
        <div className='hotel-table'>
          <div className='hotel-table-heading'>
            <h1>Hotel</h1>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <AdminAddLocationButton />
          </div>
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
              fromDate={hotel.from_date?.split("T")[0]}
              toDate={hotel.to_date?.split("T")[0]}
            />
          ))}
        </div>
      ) : (
        <div>{errorMessage}</div>
      )}
    </>
  )
}

export default AdminHotelTable