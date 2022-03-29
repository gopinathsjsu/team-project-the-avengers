import React from 'react'
import './SearchAvailabilityForm.css'

function SearchAvailabilityForm() {
  return (
    <>
      <div class='form-container'>
        <form>
          <div class='form-input'>
            <label for='destination'>Destination</label>
            <select id='destination'>
              <option value="Bangkok">Bangkok</option>
              <option value="Chicago">Chicago</option>
              <option value="London">London</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Rome">Rome</option>
              <option value="Singapore">Singapore</option>
            </select>
          </div>
          <div class='form-input'>
            <label for='check-in'>Check In</label>
            <input id='check-in' type='date'></input>
          </div>
          <div class='form-input'>
            <label for='check-out'>Check Out</label>
            <input id='check-out' type='date'></input>
          </div>
          <input class='button' type='submit' value='Find Hotels'></input>
        </form>
      </div>
    </>
  )
}

export default SearchAvailabilityForm