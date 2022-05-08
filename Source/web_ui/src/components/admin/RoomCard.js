import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './RoomCard.css';

const RoomCard = ({roomType, member, guest}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [memberPrice, setMemberPrice] = useState(member);
  const [guestPrice, setGuestPrice] = useState(guest);
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
      room_type: roomType,
      member: memberPrice,
      guest: guestPrice
    }

    axios.post('/changePriceTable', info).then(response => {
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
      width: '25%'
    },
  };

  return (
    <>
      <div className='room-card'>
        <div className='room-info-2'>{roomType.replace('_', ' ')}</div>
        <div className='room-info-1'>{member}</div>
        <div className='room-info-1'>{guest}</div>
        <button className='edit-room-button' onClick={openModal}>Edit</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal-form'>
          <form onSubmit={handleSubmit}>
            <h2>Edit Room Price</h2>
            <div className='form-input'>
              <label>Room Type</label>
              {roomType}
            </div>
            <div className='edit-room-modal-form-input'>
              <label>Member Price</label>
              <input type='number' min='1' step='0.01' defaultValue={member} onChange={(e) => setMemberPrice(e.target.value)} required></input>
            </div>
            <div className='edit-room-modal-form-input'>
              <label>Guest Price</label>
              <input type='number' min='1' step='0.01' defaultValue={guest} onChange={(e) => setGuestPrice(e.target.value)} required></input>
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

export default RoomCard