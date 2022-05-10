import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { isAdmin } from '../auth';

const AdminAddLocationButton = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState('');
//   const [multiplier, setMultiplier] = useState('');
//   const [weekendRate, setWeekendRate] = useState('');
//   const [seasonRate, setSeasonRate] = useState('');
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  function openModal() {
    setIsOpen(true);
    setErrorMessage('');
  }

  function closeModal() {
    setIsOpen(false);
  }

  function resetErrorMessage() {
    setErrorMessage('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.trim().length !== 0) {
      setErrorMessage('');
      const { token } = isAdmin();
      const info = {
        token: token,
        location: location,
        // multiplier: multiplier,
        // weekend_rate: weekendRate,
        // season_rate: seasonRate,
        // from_date: fromDate,
        // to_date: toDate
      }
    
      axios.post('/insertLocation', info).then(response => {
        setErrorMessage('');
        closeModal();
        window.location.reload();
      }).catch(error => {
        setErrorMessage('Something went wrong. Please try again later.');
        // console.log(error);
      })
    } else {
      setErrorMessage('Please enter a valid location name.');
    }
  }

  const customStyles = {
    content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '25%'
    },
  };

  return (
      <>
        <button className='add-location-button' onClick={openModal}>Add New Location</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
        >
          <div className='modal-form'>
            <form onSubmit={handleSubmit}  onChange={resetErrorMessage}>
              <h2>Add New Location</h2>
                <div className='add-hotel-modal-form-input'>
                  <label>Location</label>
                  <input type='text' onChange={(e) => setLocation(e.target.value)} required></input>
                </div>
                {/* <div className='edit-hotel-modal-form-input'>
                  <label>Multiplier</label>
                  <input type='number' step='0.01' min='0.5' onChange={(e) => setMultiplier(e.target.value)} required></input>
                </div>
                <div className='edit-hotel-modal-form-input'>
                  <label>Weekend Rate</label>
                  <input type='number' step='0.01' min='0.5' onChange={(e) => setWeekendRate(e.target.value)} required></input>
                </div>
                <div className='edit-hotel-modal-form-input'>
                  <label>Season Rate</label>
                  <input type='number' step='0.01' min='0.5' onChange={(e) => setSeasonRate(e.target.value)} required></input>
                </div>
                <div className='edit-hotel-modal-form-input'>
                  <label>From Date</label>
                  <input type='date' onChange={(e) => setFromDate(e.target.value)}></input>
                </div>
                <div className='edit-hotel-modal-form-input'>
                  <label>To Date</label>
                  <input type='date' min={fromDate} onChange={(e) => setToDate(e.target.value)}></input>
                </div> */}
                <div className='error-message'>{errorMessage}</div>
                <div className="cancel-save-container">
                  <button className='gray-button' onClick={closeModal}>Cancel</button>
                  <button className='blue-button' type='submit'>Add</button>
                </div>
            </form>
          </div>
        </Modal>
      </>
  )
}

export default AdminAddLocationButton