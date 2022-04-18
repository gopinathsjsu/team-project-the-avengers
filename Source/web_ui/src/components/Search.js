import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import './Search.css';

function Search() {
  const [searchField, setSearchField] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [results, setResults] = useState([]);

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
        city: searchField,
        checkIn: checkIn,
        checkOut: checkOut,
      };

      axios.post('', info).then(response => {
        console.log(response);
        setResults(response.data);
      }).catch(error => {
        console.log(error)
      })
      console.log(results)
    }
  }

  return (
    <>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input className='search-field' type='text' placeholder='City' onChange={(e) => setSearchField(e.target.value)} required></input>
          <input className='date-field' id='check-in' type='date' onChange={(e) => setCheckIn(e.target.value)} required></input>
          <input className='date-field' id='check-out' type='date' min={checkIn} onChange={(e) => setCheckOut(e.target.value)} required></input>
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