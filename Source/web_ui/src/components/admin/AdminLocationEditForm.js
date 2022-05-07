import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css';

function AdminLocationEditForm({location, kingSuite, queenSuite, juniorSuite, queenDeluxe}) {
  const [kingSuiteRooms, setKingSuiteRooms] = useState(kingSuite);
  const [queenSuiteRooms, setQueenSuiteRooms] = useState(queenSuite);
  const [juniorSuiteRooms, setJuniorSuiteRooms] = useState(juniorSuite);
  const [queenDeluxeRooms, setQueenDeluxeRooms] = useState(queenDeluxe);

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/admin');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
        location: location,
        King_Suite: kingSuiteRooms,
        Queen_Suite: queenSuiteRooms,
        Junior_Suite: juniorSuiteRooms,
        Queen_Deluxe: queenDeluxeRooms
    }
    /* make call to backend */
  }

  return (
    <>
      <div className='admin-edit-form'>
        <form onSubmit={handleSubmit}>
          <h1>Edit Location Information</h1>
          <div className='form-input'>
            <label>Location</label>
            Location Placeholder
          </div>
          <div className='form-input'>
            <label>King Suite</label>
            <input type='text' defaulValue={kingSuite} onChange={(e) => setKingSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Queen Suite</label>
            <input type='text' defaulValue={queenSuite} onChange={(e) => setQueenSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Junior Suite</label>
            <input type='text' defaulValue={juniorSuite} onChange={(e) => setJuniorSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Queen Deluxe</label>
            <input type='text' defaulValue={queenDeluxe} onChange={(e) => setQueenDeluxeRooms(e.target.value)}></input>
          </div>
          <div className="cancel-save-container">
            <button className='gray-button' onClick={handleClick}>Cancel</button>
            <button className='blue-button' type='submit'>Save</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminLocationEditForm