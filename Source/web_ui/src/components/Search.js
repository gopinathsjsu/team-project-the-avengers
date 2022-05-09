import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { getTomorrowDate } from './utils/helpers';
import './Search.css';

function Search() {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('');
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState('');
  
  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios.post('/getLocation').then(response => {
      // console.log(response);
      setLocations(response.data.location);
    }).catch(error => {
      console.log(error);
    })

    if (loc.state) {
      /* get data from the search form on home page, if any */
      const data = loc.state;
      // console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setResult(data.result);
      setMessage(data.message);
      navigate(loc.pathname, {});   /* clear state */
    }
  }, [loc, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Dates: ' + checkIn + ' ' + checkOut);
    const start = moment(checkIn);
    const end = moment(checkOut);
    const days = end.diff(start, 'days');
    // console.log('Total number of days: ' + days);

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
        room_type: roomType
      };

      axios.post('/search', info).then(response => {
        console.log(response);
        if (response.data.room_no === -1) {
          setResult(0);
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

  const handleClick = () => {
    const data = {
      location: location,
      checkIn: checkIn,
      checkOut: checkOut,
      roomType: roomType,
      roomID: result
    };

    navigate('/booking', {state: data})
  }

  return (
    <>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <select className='location-field' onChange={(e) => setLocation(e.target.value)} defaultValue={location} required>
            <option value='' disabled>Select a Location</option>
            {locations?.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <input className='date-field' id='check-in' type='date' min={getTomorrowDate()} onChange={(e) => setCheckIn(e.target.value)} defaultValue={checkIn} required></input>
          <input className='date-field' id='check-out' type='date' min={checkIn} onChange={(e) => setCheckOut(e.target.value)} defaultValue={checkOut} required></input>
          <select className='room-field' onChange={(e) => setRoomType(e.target.value)} defaultValue={roomType} required>
            <option value='' disabled>Select a Room Type</option>
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