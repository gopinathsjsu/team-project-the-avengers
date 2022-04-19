import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Search.css';

function Search() {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('').then(response => {
      console.log(response);
      setLocations(response.data);
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
      alert("Invalid check in and check out date combination.");
    } else if (days > 7) {
      alert("You can only book a room for stay up to 1 week.");
    } else {
      const info = {
        city: location,
        checkIn: checkIn,
        checkOut: checkOut,
        room: roomType,
      };

      axios.post('', info).then(response => {
        console.log(response);
        setResults(response.data);
      }).catch(error => {
        console.log(error);
      })
      console.log(results);
    }
  }

  return (
    <>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <select className='location-field' onChange={(e) => setLocation(e.target.value)} required>
            <option value='' disabled selected>Select a Location</option>
            {locations.map((location) => (
              <option value={location.city}>{location.city}</option>
            ))}
          </select>
          <input className='date-field' id='check-in' type='date' onChange={(e) => setCheckIn(e.target.value)} required></input>
          <input className='date-field' id='check-out' type='date' min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required></input>
          <select className='room-field' onChange={(e) => setRoomType(e.target.value)} required>
            <option value='' disabled selected>Select a Room Type</option>
            <option value='King Suite'>King Suite</option>
            <option value='Queen Suite'>Queen Suite</option>
            <option value='Junior Suite'>Junior Suite</option>
            <option value='Queen Deluxe'>Queen Deluxe</option>
          </select>
          <input className='search-button' type='submit' value='Find Hotels'></input>
        </form>
      </div>
      <div>
        {results ? (
          results.map((result) => (
            <div></div>
          ))
        ) : (
          <> </>
        )}
      </div>
    </>
  )
}

export default Search