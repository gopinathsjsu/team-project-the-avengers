import React, { useState } from 'react';
import axios from 'axios';
import { isAdmin } from '../auth';
import Modal from 'react-modal';
import './LocationCard.css';

const LocationCard = ({location, kingSuite, queenSuite, juniorSuite, queenDeluxe}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [kingSuiteRooms, setKingSuiteRooms] = useState(kingSuite);
  const [queenSuiteRooms, setQueenSuiteRooms] = useState(queenSuite);
  const [juniorSuiteRooms, setJuniorSuiteRooms] = useState(juniorSuite);
  const [queenDeluxeRooms, setQueenDeluxeRooms] = useState(queenDeluxe);
  const [errorMessage, setErrorMessage] = useState('');

  function openModal() {
    setIsOpen(true);
    setErrorMessage('');
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { token } = isAdmin();
    const info = {
      token: token,
      location: location,
      King_Suite: kingSuiteRooms,
      Queen_Suite: queenSuiteRooms,
      Junior_Suite: juniorSuiteRooms,
      Queen_Deluxe: queenDeluxeRooms
    }

    axios.post('/changeRoomno', info).then(response => {
      setErrorMessage('');
      closeModal();
      window.location.reload();
    }).catch(error => {
      setErrorMessage('Something went wrong. Please try again later.');
      // console.log(error);
    })
  }

  const customStyles = {
    content: {
      top: '55%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '30%'
    },
  };

  return (
    <>
      <div className='location-card'>
        <div className='location-info'>{location}</div>
        <div className='location-info'>{kingSuite}</div>
        <div className='location-info'>{queenSuite}</div>
        <div className='location-info'>{juniorSuite}</div>
        <div className='location-info'>{queenDeluxe}</div>
        <button className='edit-location-button' onClick={openModal}>Edit</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal-form'>
          <form onSubmit={handleSubmit}>
            <h2>Edit Number of Rooms</h2>
            <div className='form-input'>
              <label>Location</label>
              {location}
            </div>
            <div className='edit-location-modal-form-input'>
              <label>Number of King Suite rooms</label>
              <input type='number' min='0' defaultValue={kingSuite} onChange={(e) => setKingSuiteRooms(e.target.value)} required></input>
            </div>
            <div className='edit-location-modal-form-input'>
              <label>Number of Queen Suite rooms</label>
              <input type='number' min='0' defaultValue={queenSuite} onChange={(e) => setQueenSuiteRooms(e.target.value)} required></input>
            </div>
            <div className='edit-location-modal-form-input'>
              <label>Number of Junior Suite rooms</label>
              <input type='number' min='0' defaultValue={juniorSuite} onChange={(e) => setJuniorSuiteRooms(e.target.value)} required></input>
            </div>
            <div className='edit-location-modal-form-input'>
              <label>Number of Queen Deluxe rooms</label>
              <input type='number' min='0' defaultValue={queenDeluxe} onChange={(e) => setQueenDeluxeRooms(e.target.value)} required></input>
            </div>
            <div className='error-message'>{errorMessage}</div>
            <div className="cancel-save-container">
              <button className='gray-button' onClick={closeModal}>Cancel</button>
              <button className='blue-button' type='submit'>Save</button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  )
}

export default LocationCard