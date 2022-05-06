import React, { useState } from 'react';
import Modal from 'react-modal';
import './LocationCard.css';

const LocationCard = ({location, kingSuite, queenSuite, juniorSuite, queenDeluxe}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [kingSuiteRooms, setKingSuiteRooms] = useState(kingSuite);
  const [queenSuiteRooms, setQueenSuiteRooms] = useState(queenSuite);
  const [juniorSuiteRooms, setJuniorSuiteRooms] = useState(juniorSuite);
  const [queenDeluxeRooms, setQueenDeluxeRooms] = useState(queenDeluxe);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <div className='location-card' onClick={openModal}>
        <div className='location-info'>{location}</div>
        <div className='location-info'>{kingSuite}</div>
        <div className='location-info'>{queenSuite}</div>
        <div className='location-info'>{juniorSuite}</div>
        <div className='location-info'>{queenDeluxe}</div>
        <button className='edit-button'>Edit</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <h1>Edit Location Information</h1>
          <div className='form-input'>
            <label>Location</label>
            {location}
          </div>
          <div className='form-input'>
            <label>King Suite</label>
            <input type='number' min='0' defaultValue={kingSuite} onChange={(e) => setKingSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Queen Suite</label>
            <input type='number' min='0' defaultValue={queenSuite} onChange={(e) => setQueenSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Junior Suite</label>
            <input type='number' min='0' defaultValue={juniorSuite} onChange={(e) => setJuniorSuiteRooms(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label>Queen Deluxe</label>
            <input type='number' min='0' defaultValue={queenDeluxe} onChange={(e) => setQueenDeluxeRooms(e.target.value)}></input>
          </div>
          <div className="cancel-save-container">
            <button className='gray-button' onClick={closeModal}>Cancel</button>
            <button className='blue-button' type='submit'>Save</button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default LocationCard