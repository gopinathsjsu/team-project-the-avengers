import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentForm.css';

function PaymentForm() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState(0);
  const [guests, setGuests] = useState(1);
  const [total, setTotal] = useState(0);

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    try{
      /* get data entered on search and booking page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
      setGuests(data.guests)
      setTotal(data.total);
      console.log(total);
    } catch (err) {
      navigate('/search');
    }
  }, [loc.state, navigate, total]);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className='payment-form-container'>
          <div className='form-input'>
            <div className='total-container'>
              <label>Total:</label>&nbsp;${total}
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='name-container'>
              <div className='form-input'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' required></input>
              </div>
              <div className='form-input'>
                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' required></input>
              </div>
            </div>
            <div className='form-input'>
              <label htmlFor='cnn'>Credit Card Number</label>
              <input id='cnn' type='tel' inputmode='numeric' pattern='[0-9\s]{13,19}' maxlength='19' placeholder='xxxx xxxx xxxx xxxx' required></input>
            </div>
            <div className='expiry-cvc-container'>
              <div className='form-input'>
                <label htmlFor='expiration-date'>Expiration Date</label>
                <input id='expiration-date' type='text' placeholder='MM/YY' required></input>
              </div>
              <div className='form-input'>
                <label htmlFor='cvc'>Security Code</label>
                <input id='cvc' type='text' placeholder='CVC' required></input>
              </div>
            </div>
            <button className='orange-button' type='submit'>Next</button>
          </form>
      </div>
    </>
  )
}

export default PaymentForm