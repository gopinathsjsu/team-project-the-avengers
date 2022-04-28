import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './SearchAvailabilityForm.css';

function SearchAvailabilityForm() {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3000/getLocation').then(response => {
      console.log(response);
      setLocations(response.data.location);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dates: ' + checkIn + ' ' + checkOut);
    const start = moment(checkIn);
    const end = moment(checkOut);
    const days = end.diff(start, 'days');
    console.log('Total number of days: ' + days);

    /* validate check in and check out date */
    if (days < 1) {
      setErrorMessage('Invalid check in and check out date combination.');
    } else if (days > 7) {
      setErrorMessage('You can only book a room for stay up to 1 week.');
    } else {
      setErrorMessage('');
      const info = {
        start_date: checkIn,
        end_date: checkOut,
        location: location,
        room_type: roomType
      };

      axios.post('http://localhost:3000/search', info).then(response => {
        console.log(response);
        const data = {
          location: location,
          checkIn: checkIn,
          checkOut: checkOut,
          roomType: roomType,
          result: 0,
          message: ''
        };

        if (response.data.room_no === -1) {
          data.result = 0;
          data.message = 'No availability found.';
        } else {
          data.result = response.data.room_no;
          data.message = 'There is a room available.';
        }

        /* pass data to main search page */
        navigate('/search', {state: data})
      }).catch(error => {
        console.log(error);
      })
    }
  }

  return (
    <>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='destination'>Destination</label>
            <select id='destination' onChange={(e) => setLocation(e.target.value)} defaultValue='' required>
              <option value='' disabled>Select a Location</option>
              {locations.map((location) => (
                <option value={location}>{location}</option>
              ))}
          </select>
          </div>
          <div className='form-input'>
            <label htmlFor='check-in'>Check In</label>
            <input id='check-in' type='date' onChange={(e) => setCheckIn(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='check-out'>Check Out</label>
            <input id='check-out' type='date' min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='room-type'>Room Type</label>
            <select id='room-type' onChange={(e) => setRoomType(e.target.value)} defaultValue='' required>
              <option value='' disabled>Select a Room Type</option>
              <option value='King_Suite'>King Suite</option>
              <option value='Queen_Suite'>Queen Suite</option>
              <option value='Junior_Suite'>Junior Suite</option>
              <option value='Queen_Deluxe'>Queen Deluxe</option>
            </select>
          </div>
          <div className='error-message'>{errorMessage}</div>
          <button className='orange-button' type='submit'>Find Hotels</button>
        </form>
      </div>
    </>
  )
}

export default SearchAvailabilityForm