import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './BookingForm.css';

// FM CSS STARTS
import styles from './cssmodules/BookingForm.module.css';
// FM CSS ENDS

function BookingForm() {
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState(0);
  const [guests, setGuests] = useState(0);
  const [amenities, setAmenities] = useState({
    dailyBreakfast: '',
    fitnessRoom: '',
    swimmingPoolJacuzzi: '',
    dailyParking: '',
    allMeals: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.state) {
      /* get data entered on search page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
    } else {
      navigate('/search');
    }
  }, [loc.state, navigate]);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    if (e.target.checked) {
      // console.log(value)
      setAmenities(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else {
      setAmenities(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedAmenities = [];   /* an array of integers that represent the selected amenities as their ID in db */
    if (amenities.dailyBreakfast) {
      selectedAmenities.push(2);
    }
    if (amenities.fitnessRoom) {
      selectedAmenities.push(3);
    }
    if (amenities.swimmingPoolJacuzzi) {
      selectedAmenities.push(4);
    }
    if (amenities.dailyParking) {
      selectedAmenities.push(5);
    }
    if (amenities.allMeals) {
      selectedAmenities.push(6);
    }
    if (selectedAmenities.length === 0) {
      selectedAmenities.push(1);
    }

    const { token } = isAuthenticated();
    
    const info = {
      token: token,
      start_date: checkIn,
      end_date: checkOut,
      location: location,
      room_type: roomType,
      no_of_guests: guests,
      amenities: selectedAmenities
    };

    const headers = {
      'x-access-token': token
    };

    axios.post('/price', info, headers).then(response => {
      console.log(response);
      const data = {
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        roomType: roomType,
        roomID: roomID,
        guests: guests,
        selectedAmenities: selectedAmenities,
        amenitiesInfo: amenities,
        total: response.data.price,
        newUserPoints: response.data.new_user_points,
        userPointsApplied: response.data.is_user_points
      };
      setErrorMessage('');
      navigate('/payment', {state: data});
    }).catch(error => {
      setErrorMessage('Something went wrong. Please try again later.');
      // console.log(error);
    })
  }

  return (
    <>
    <div className={styles.bookingFormContainerContainer}>
      <div className={styles.bookingFormContainer}>
        <h1>Booking</h1>
        <div className='form-input'>
          <label>Location</label>
          {location}
        </div>
        <div className='form-input'>
          <label>Room Type</label>
          {roomType.replace('_', ' ')}
        </div>
        <div className='date-container'>
          <div className='form-input'>
              <label>Check-In Date</label>
              {checkIn}
          </div>
          <div className='form-input'>
              <label>Check-Out Date</label>
              {checkOut}
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='guests_number'>Number of Guests</label>
            <input id='guests_number' type='number' min='0' onChange={(e) => setGuests(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label>Amenities</label>
            <div className='amenity-option'>
              <input id='daily-breakfast' name='dailyBreakfast' type='checkbox' className='amenity-checkbox' value='Daily Continental Breakfast' onChange={handleCheckboxChange}></input>
              <label className='amenity-label' htmlFor='daily-breakfast'>Daily Continental Breakfast</label>
            </div>
            <div className='amenity-option'>
              <input id='fitness-room' name='fitnessRoom' type='checkbox' className='amenity-checkbox' value='Access to Fitness Room' onChange={handleCheckboxChange}></input>
              <label className='amenity-label' htmlFor='fitness-room'>Access to Fitness Room</label>
            </div>
            <div className='amenity-option'>
              <input id='swimming-pool-jacuzzi' name='swimmingPoolJacuzzi' type='checkbox' className='amenity-checkbox' value='Access to Swimming Pool/Jacuzzi' onChange={handleCheckboxChange}></input>
              <label className='amenity-label' htmlFor='swimming-pool-jacuzzi'>Access to Swimming Pool/Jacuzzi</label>
            </div>
            <div className='amenity-option'>
              <input id='daily-parking' name='dailyParking' type='checkbox' className='amenity-checkbox' value='Daily Parking' onChange={handleCheckboxChange}></input>
              <label className='amenity-label' htmlFor='daily-parking'>Daily Parking</label>
            </div>
            <div className='amenity-option'>
              <input id='all-meals' name='allMeals' type='checkbox' className='amenity-checkbox' value='All Meals Included' onChange={handleCheckboxChange}></input>
              <label className='amenity-label' htmlFor='all-meals'>All Meals Included</label>
            </div>
          </div>
          <div className='error-message'>{errorMessage}</div>
          <button className='orange-button' type='submit'>Next</button>
        </form>
      </div>
      </div>
    </>
  )
}

export default BookingForm