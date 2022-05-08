import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import './AmenityCard.css';

const AmenityCard = ({id, description, price}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newPrice, setPrice] = useState(price);
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
      amenity_id: id,
      amenity_description: description,
      amenity_price: newPrice
    }

    axios.post('/changeAmenities', info).then(response => {
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
      <div className='amenity-card'>
        <div className='amenity-info-2'>{description}</div>
        <div className='amenity-info-1'>{price}</div>
        <button className='edit-amenity-button' onClick={openModal}>Edit</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className='modal-form'>
          <form onSubmit={handleSubmit}>
            <h2>Edit Amenity Price</h2>
            <div className='form-input'>
              <label>Description</label>
              {description}
            </div>
            <div className='edit-amenity-modal-form-input'>
              <label>Price</label>
              <input type='number' min='0' step='0.01' defaultValue={price} onChange={(e) => setPrice(e.target.value)} required></input>
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

export default AmenityCard