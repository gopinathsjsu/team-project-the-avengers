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
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [amenitiesInfo, setAmenitiesInfo] = useState({});
  const [total, setTotal] = useState(0);
  const [newUserPoints, setNewUserPoints] = useState(0);
  const [userPointsApplied, setUserPointsApplied] = useState(false);

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.state) {
      /* get data entered on search and booking page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
      setGuests(data.guests);
      setSelectedAmenities(data.selectedAmenities);
      setAmenitiesInfo(data.amenitiesInfo);
      setTotal(data.total);
      setNewUserPoints(data.newUserPoints);
      setUserPointsApplied(data.userPointsApplied);
    } else {
      navigate('/search');
    }
  }, [loc.state, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      location: location,
      checkIn: checkIn,
      checkOut: checkOut,
      roomType: roomType,
      roomID: roomID,
      guests: guests,
      selectedAmenities: selectedAmenities,
      amenitiesInfo: amenitiesInfo,
      total: total,
      newUserPoints: newUserPoints,
      userPointsApplied: userPointsApplied
    };

    navigate('/booking-details', {state: data});
  }

  return (
    <>
      <div className='payment-form-container'>
        <h1>Payment Information</h1>
        <div className='form-input'>
          <div className='total-container'>
            <label>Total:</label>&nbsp;${total}&nbsp;&nbsp;&nbsp;&nbsp;
            {userPointsApplied
              ? <div className='points-applied'>(Reward points were applied)</div>
              : <> </>
            }
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='name-container'>
            <div className='form-input'>
              <div className='left-input'>
                <label htmlFor='first-name'>First Name</label>
                <input id='first-name' type='text' required></input>
              </div>
            </div>
            <div className='form-input'>
              <div className='right-input'>
                <label htmlFor='last-name'>Last Name</label>
                <input id='last-name' type='text' required></input>
              </div>
            </div>
          </div>
          <div className='form-input'>
            <label htmlFor='cnn'>Credit Card Number</label>
            <input id='cnn' type='tel' inputMode='numeric' pattern='[0-9\s]{13,19}' maxLength='19' placeholder='xxxx xxxx xxxx xxxx' required></input>
          </div>
          <div className='expiry-cvc-container'>
            <div className='form-input'>
              <div className='left-input'>
                <label htmlFor='expiration-date'>Expiration Date</label>
                <input id='expiration-date' type='text' pattern='^(0[1-9]|1[0-2])\/([0-9]{2})$' maxLength='5' placeholder='MM/YY' required></input>
              </div>
            </div>
            <div className='form-input'>
              <div className='right-input'>
                <label htmlFor='cvc'>Security Code</label>
                <input id='cvc' type='text' pattern='^[0-9]{3}$' maxLength='3' placeholder='CVC' required></input>
              </div>
            </div>
          </div>
          <button className='orange-button' type='submit'>Next</button>
        </form>
      </div>
    </>
  )
}

export default PaymentForm