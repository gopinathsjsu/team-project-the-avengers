import React from 'react';
import './SearchAvailabilityForm.css';

function SearchAvailabilityForm() {
  return (
    <>
      <div className='form-container'>
        <form>
          <div className='form-input'>
            <label htmlFor='destination'>Destination</label>
            <select id='destination'>
              <option value="Bangkok">Bangkok</option>
              <option value="Chicago">Chicago</option>
              <option value="London">London</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Rome">Rome</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>
          <div className='form-input'>
            <label htmlFor='check-in'>Check In</label>
            <input id='check-in' type='date'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='check-out'>Check Out</label>
            <input id='check-out' type='date'></input>
          </div>
          <input className='orange-button' type='submit' value='Find Hotels'></input>
        </form>
      </div>
    </>
  )
}

export default SearchAvailabilityForm