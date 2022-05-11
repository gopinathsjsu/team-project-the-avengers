import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './BookingForm.css';

function EditReservationForm() {
  const [id, setId] = useState('');
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomNumber, setRoomNumber] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [initialGuests, setInitialGuests] = useState(0);
  const [guests, setGuests] = useState(0);
  const [initialAmenities, setInitialAmenities] = useState({
    dailyBreakfast: '',
    fitnessRoom: '',
    swimmingPoolJacuzzi: '',
    dailyParking: '',
    allMeals: ''
  });
  const [amenities, setAmenities] = useState({
    dailyBreakfast: '',
    fitnessRoom: '',
    swimmingPoolJacuzzi: '',
    dailyParking: '',
    allMeals: ''
  });
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (loc.state) {
      /* get data from reservations page */
      const data = loc.state;
      // console.log(data);
      setId(data.id);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomNumber(data.roomNumber);
      setOldPrice(data.price);
      setInitialGuests(data.guests);
      setGuests(data.guests);
      const arr = data.amenities.split(', ');
      if (arr.includes('Daily Continental Breakfast')) {
        setInitialAmenities(prevState => ({
          ...prevState,
          dailyBreakfast: 'Daily Continental Breakfast'
        }));
      }
      if (arr.includes('Access to Fitness Room')) {
        setInitialAmenities(prevState => ({
          ...prevState,
          fitnessRoom: 'Access to Fitness Room'
        }));
      }
      if (arr.includes('Access to Swimming Pool/Jacuzzi')) {
        setInitialAmenities(prevState => ({
          ...prevState,
          swimmingPoolJacuzzi: 'Access to Swimming Pool/Jacuzzi'
        }));
      }
      if (arr.includes('Daily Parking')) {
        setInitialAmenities(prevState => ({
          ...prevState,
          dailyParking: 'Daily Parking'
        }));
      }
      if (arr.includes('All Meals Included')) {
        setInitialAmenities(prevState => ({
          ...prevState,
          allMeals: 'All Meals Included'
        }));
      }
      setLoading(false);
    } else {
      navigate('/reservations');
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

    const selectedAmenities = [];   /* an array of integers that represent the added amenities as their ID in db */
    if (amenities.dailyBreakfast) {
      selectedAmenities.push(1);
    }
    if (amenities.fitnessRoom) {
      selectedAmenities.push(2);
    }
    if (amenities.swimmingPoolJacuzzi) {
      selectedAmenities.push(3);
    }
    if (amenities.dailyParking) {
      selectedAmenities.push(4);
    }
    if (amenities.allMeals) {
      selectedAmenities.push(5);
    }

    var newGuests = guests - initialGuests;

    const { token } = isAuthenticated();
    
    const info = {
      token: token,
      id: id,
      checkIn: checkIn,
      checkOut: checkOut,
      location: location,
      roomType: roomType,
      roomNumber: roomNumber,
      oldPrice: oldPrice,
      addedGuests: newGuests,
      addedAmenities: selectedAmenities
    };

    const headers = {
      'x-access-token': token
    };

    const allSelectedAmenities = [];    /* including old ammenities */
    const allSelectedAmenityNames = [];
    if (amenities.dailyBreakfast || initialAmenities.dailyBreakfast) {
      allSelectedAmenities.push(1);
      allSelectedAmenityNames.push('Daily Continental Breakfast');
    }
    if (amenities.fitnessRoom || initialAmenities.fitnessRoom) {
      allSelectedAmenities.push(2);
      allSelectedAmenityNames.push('Access to Fitness Room');
    }
    if (amenities.swimmingPoolJacuzzi || initialAmenities.swimmingPoolJacuzzi) {
      allSelectedAmenities.push(3);
      allSelectedAmenityNames.push('Access to Swimming Pool/Jacuzzi');
    }
    if (amenities.dailyParking || initialAmenities.dailyParking) {
      allSelectedAmenities.push(4);
      allSelectedAmenityNames.push('Daily Parking');
    }
    if (amenities.allMeals || initialAmenities.allMeals) {
      allSelectedAmenities.push(5);
      allSelectedAmenityNames.push('All Meals Included');
    }
    if (allSelectedAmenities.length === 0) {
      allSelectedAmenities.push(0);
      allSelectedAmenityNames.push('No Amenities');
    }

    axios.post('/editReservation', info, headers).then(response => {
      // console.log(response);
      const data = {
        id: id,
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        roomType: roomType,
        roomNumber: roomNumber,
        guests: guests,
        selectedAmenities: allSelectedAmenities,
        selectedAmenityNames: allSelectedAmenityNames,
        total: response.data.newPrice,
      };
      setErrorMessage('');
      navigate('/reservations/edit/confirmation', {state: data});
    }).catch(error => {
      setErrorMessage(error.response.data.message?error.response.data.message: 'Something went wrong. Please try again leter.');
      // console.log(error);
    })
  }

  return (
    <>
      {!loading ? (
        <div className='booking-form-container'>
          <h1>Edit Reservation</h1>
          <div>Note: You can only add to the existing number of guests or selected amenities.</div>
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
              <input id='guests_number' type='number' min={initialGuests} defaultValue={initialGuests} onChange={(e) => setGuests(e.target.value)} required></input>
            </div>
            <div className='form-input'>
              <label>Amenities</label>
              {!initialAmenities.dailyBreakfast ? (
                <div className='amenity-option'>
                  <input id='daily-breakfast' name='dailyBreakfast' type='checkbox' className='amenity-checkbox' value='Daily Continental Breakfast' onChange={handleCheckboxChange}></input>
                  <label className='amenity-label' htmlFor='daily-breakfast'>Daily Continental Breakfast</label>
                </div>
              ) : (
                <div className='amenity-option'>
                  <input id='daily-breakfast' name='dailyBreakfast' type='checkbox' className='amenity-checkbox' value='Daily Continental Breakfast' checked='checked' readOnly></input>
                  <label className='amenity-label' htmlFor='daily-breakfast'>Daily Continental Breakfast</label>
                </div>
              )}

              {!initialAmenities.fitnessRoom ? (
                <div className='amenity-option'>
                  <input id='fitness-room' name='fitnessRoom' type='checkbox' className='amenity-checkbox' value='Access to Fitness Room' onChange={handleCheckboxChange}></input>
                  <label className='amenity-label' htmlFor='fitness-room'>Access to Fitness Room</label>
                </div>
              ) : (
                <div className='amenity-option'>
                  <input id='fitness-room' name='fitnessRoom' type='checkbox' className='amenity-checkbox' value='Access to Fitness Room' checked='checked' readOnly></input>
                  <label className='amenity-label' htmlFor='fitness-room'>Access to Fitness Room</label>
                </div>
              )}

              {!initialAmenities.swimmingPoolJacuzzi ? (
                <div className='amenity-option'>
                  <input id='swimming-pool-jacuzzi' name='swimmingPoolJacuzzi' type='checkbox' className='amenity-checkbox' value='Access to Swimming Pool/Jacuzzi' onChange={handleCheckboxChange}></input>
                  <label className='amenity-label' htmlFor='swimming-pool-jacuzzi'>Access to Swimming Pool/Jacuzzi</label>
                </div>
              ) : (
                <div className='amenity-option'>
                  <input id='swimming-pool-jacuzzi' name='swimmingPoolJacuzzi' type='checkbox' className='amenity-checkbox' value='Access to Swimming Pool/Jacuzzi' checked='checked' readOnly></input>
                  <label className='amenity-label' htmlFor='swimming-pool-jacuzzi'>Access to Swimming Pool/Jacuzzi</label>
                </div>
              )}

              {!initialAmenities.dailyParking ? (
                <div className='amenity-option'>
                  <input id='daily-parking' name='dailyParking' type='checkbox' className='amenity-checkbox' value='Daily Parking' onChange={handleCheckboxChange}></input>
                  <label className='amenity-label' htmlFor='daily-parking'>Daily Parking</label>
                </div>
              ): (
                <div className='amenity-option'>
                  <input id='daily-parking' name='dailyParking' type='checkbox' className='amenity-checkbox' value='Daily Parking' checked='checked' readOnly></input>
                  <label className='amenity-label' htmlFor='daily-parking'>Daily Parking</label>
                </div>
              )}

              {!initialAmenities.allMeals ? (
                <div className='amenity-option'>
                  <input id='all-meals' name='allMeals' type='checkbox' className='amenity-checkbox' value='All Meals Included' onChange={handleCheckboxChange}></input>
                  <label className='amenity-label' htmlFor='all-meals'>All Meals Included</label>
                </div>
              ) : (
                <div className='amenity-option'>
                  <input id='all-meals' name='allMeals' type='checkbox' className='amenity-checkbox' value='All Meals Included' checked='checked' readOnly></input>
                  <label className='amenity-label' htmlFor='all-meals'>All Meals Included</label>
                </div>
              )}
            </div>
            <div className='error-message'>{errorMessage}</div>
            <button className='orange-button' type='submit'>Next</button>
          </form>
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default EditReservationForm