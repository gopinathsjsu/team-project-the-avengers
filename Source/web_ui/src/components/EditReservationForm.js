import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './BookingForm.css';

function EditReservationForm() {
  const [id, setId] = useState(0);
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomID, setRoomID] = useState(0);
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

  const splitAmenitiesList = (amenitiesList) => {
    const arr = amenitiesList.split(', ');
    var name = '';
    var value = '';
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 'Daily Continental Breakfast') {
        name = 'dailyBreakfast';
        value = 'Daily Continental Breakfast';
      } else if (arr[i] === 'Access to Fitness Room') {
        name = 'fitnessRoom';
        value = 'Access to Fitness Room';
      } else if (arr[i] === 'Access to Swimming Pool/Jacuzzi') {
        name = 'swimmingPoolJacuzzi';
        value = 'Access to Swimming Pool/Jacuzzi';
      } else if (arr[i] === 'Daily Parking') {
        name = 'dailyParking';
        value = 'Daily Parking';
      } else if (arr[i] === 'All Meals Included') {
        name = 'allMeals';
        value = 'All Meals Included';
      }

      setInitialAmenities(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  useEffect(() => {
    if (loc.state) {
      /* get data entered on search page */
      const data = loc.state;
      console.log(data);
      setId(data.id);
      setLocation(data.location);
      setRoomType(data.roomType);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setRoomID(data.roomID);
      setOldPrice(data.price);
      setInitialGuests(data.guests);
      splitAmenitiesList(data.amenities);
      setLoading(false);
    } else {
      navigate('/reservations');
    }
  }, [loc.state, navigate]);

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    if (e.target.checked) {
      console.log(value)
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
    // e.preventDefault();

    // const selectedAmenities = [];   /* an array of integers that represent the selected amenities as their ID in db */
    // if (amenities.dailyBreakfast) {
    //   selectedAmenities.push(2);
    // }
    // if (amenities.fitnessRoom) {
    //   selectedAmenities.push(3);
    // }
    // if (amenities.swimmingPoolJacuzzi) {
    //   selectedAmenities.push(4);
    // }
    // if (amenities.dailyParking) {
    //   selectedAmenities.push(5);
    // }
    // if (amenities.allMeals) {
    //   selectedAmenities.push(6);
    // }
    // // if (selectedAmenities.length === 0) {
    // //   selectedAmenities.push(1);
    // // }

    // const newGuests = guests - initialGuests;

    // const { token } = isAuthenticated();
    
    // const info = {
    //   token: token,
    //   start_date: checkIn,
    //   end_date: checkOut,
    //   location: location,
    //   room_type: roomType,
    //   no_of_guests: newGuests,
    //   amenities: selectedAmenities
    // };

    // const headers = {
    //   'x-access-token': token
    // };

    // axios.post('/price', info, headers).then(response => {
    //   console.log(response);
    //   const data = {
    //     location: location,
    //     checkIn: checkIn,
    //     checkOut: checkOut,
    //     roomType: roomType,
    //     roomID: roomID,
    //     guests: guests,
    //     selectedAmenities: selectedAmenities,
    //     amenitiesInfo: amenities,
    //     total: response.data.price,
    //     newUserPoints: response.data.new_user_points
    //   };
    //   setErrorMessage('');
    //   navigate('/payment', {state: data});
    // }).catch(error => {
    //   setErrorMessage('Something went wrong. Please try again later.');
    //   // console.log(error);
    // })
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