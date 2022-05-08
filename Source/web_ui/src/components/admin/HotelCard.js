import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './HotelCard.css';

const HotelCard = ({location, multiplier, weekendRate, seasonRate, fromDate, toDate}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [m, setM] = useState(multiplier);
  const [wr, setWR] = useState(weekendRate);
  const [sr, setSR] = useState(seasonRate);
  const [fd, setFD] = useState(fromDate);
  const [td,setTD] = useState(toDate);
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
    const info = {
      location: location,
      multiplier: m,
      weekend_rate: wr,
      season_rate: sr,
      from_date: fd,
      to_date: td
    };

    if (fd === '') {
      info.from_date = null;
    }

    if (td === '') {
      info.to_date = null;
    }

    axios.post('/changeHotel', info).then(response => {
      setErrorMessage('');
      closeModal();
      // window.location.reload();
    }).catch(error => {
      setErrorMessage('Something went wrong. Please try again later.');
      // console.log(error);
    })
  }

  const deleteHotel = async(e) => {
    e.preventDefault();
    const info = {
      location: location
    }

    await axios.post('/deleteLocation', info).then(response => {
      window.location.reload();
    }).catch(error => {
      alert('Something went wrong. Please try again later.');
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
      width: '25%'
    },
  };

  return (
    <>
      <div className='hotel-card'>
        <div className='hotel-info'>{location}</div>
        <div className='hotel-info'>{multiplier}</div>
        <div className='hotel-info'>{weekendRate}</div>
        <div className='hotel-info'>{seasonRate}</div>
        <div className='hotel-info'>{fromDate}</div>
        <div className='hotel-info'>{toDate}</div>
        <div className='edit-delete-container'>
          <button className='edit-hotel-button' onClick={openModal}>Edit</button>
          <button className='delete-hotel-button' onClick={deleteHotel}>Delete</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal-form'>
          <form onSubmit={handleSubmit}>
            <h2>Edit Hotel Information</h2>
            <div className='form-input'>
              <label>Location</label>
              {location}
            </div>
            <div className='edit-hotel-modal-form-input'>
              <label>Multiplier</label>
              <input type='number' step='0.01' min='0.5' defaultValue={multiplier} onChange={(e) => setM(e.target.value)} required></input>
            </div>
            <div className='edit-hotel-modal-form-input'>
              <label>Weekend Rate</label>
              <input type='number' step='0.01' min='0.5' defaultValue={weekendRate} onChange={(e) => setWR(e.target.value)} required></input>
            </div>
            <div className='edit-hotel-modal-form-input'>
              <label>Season Rate</label>
              <input type='number' step='0.01' min='0.5' defaultValue={seasonRate} onChange={(e) => setSR(e.target.value)} required></input>
            </div>
            <div className='edit-hotel-modal-form-input'>
              <label>From Date</label>
              <input type='date' defaultValue={fromDate} onChange={(e) => setFD(e.target.value)}></input>
            </div>
            <div className='edit-hotel-modal-form-input'>
              <label>To Date</label>
              <input type='date' min={fd} defaultValue={toDate} onChange={(e) => setTD(e.target.value)}></input>
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

export default HotelCard