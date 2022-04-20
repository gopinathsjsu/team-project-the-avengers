import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import './Search.css';

function Search() {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');

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
        start_date: checkIn,
        end_date: checkOut,
        location: location,
        room_type: roomType,
      };

      axios.post('', info).then(response => {
        console.log(response);
        if (response.data.room_no === -1) {
          setResult(0)
          setMessage('No availability found.');
        } else {
          setResult(response.data.room_no);
          setMessage('There is a room available.');
        }
      }).catch(error => {
        console.log(error);
      })
      console.log(result);
    }
  }

  const navigate = useNavigate();
  const handleClick = () => {
    const data = {
      location: location,
      checkIn: checkIn,
      checkOut: checkOut,
      roomType: roomType,
      roomID: result,
    };

    navigate('/booking', {state: data})
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
            <option value='San Jose'>San Jose</option>
            <option value='San Francisco'>San Francisco</option>
          </select>
          <input className='date-field' id='check-in' type='date' onChange={(e) => setCheckIn(e.target.value)} required></input>
          <input className='date-field' id='check-out' type='date' min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required></input>
          <select className='room-field' onChange={(e) => setRoomType(e.target.value)} required>
            <option value='' disabled selected>Select a Room Type</option>
            <option value='King_Suite'>King Suite</option>
            <option value='Queen_Suite'>Queen Suite</option>
            <option value='Junior_Suite'>Junior Suite</option>
            <option value='Queen_Deluxe'>Queen Deluxe</option>
          </select>
          <button className='search-button' type='submit'>Find Hotels</button>
        </form>
      </div>
      <div className='result-container'>
        <div>{message}</div>
        {result ? (
          <button className='orange-button continue-button' onClick={handleClick}>Continue to Booking page</button>
        ) : (
          <> </>
        )}
      </div>
    </>
  )
}

export default Search