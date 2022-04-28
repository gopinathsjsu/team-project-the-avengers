import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  const [location, setLocation] = useState('');
  const [King_Suite, setKingSuite] = useState('');
  const [Queen_Suite, setQueenSuite] = useState('');
  const [Junior_Suite, setJuniorSuite] = useState('');
  const [Queen_Deluxe, setQueenDeluxe] = useState('');

  
  const loc = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    try{
      /* get data entered on search page */
      const data = loc.state;
      console.log(data);
      setLocation(data.location);
      setKingSuite(data.King_Suite);
      setQueenSuite(data.Queen_Suite);
      setJuniorSuite(data.Junior_Suite);
      setQueenDeluxe(data.Queen_Deluxe);
    } catch (err) {
      navigate('/admin');
    }
  }, [loc.state, navigate]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const info = {
      location: location,
      King_Suite: King_Suite,
      Queen_Suite: Queen_Suite,
      Junior_Suite: Junior_Suite,
      Queen_Deluxe: Queen_Deluxe
    };
    
    axios.post('/adminStuff/addLocation', info).then(response =>{
      console.log(response);
      alert('Location added successfully');
    }).catch(error =>{
      console.log(error);
    })
  }

  return (
    <>
      <div className='location-form-container'>
        <h1>Add Location</h1>
        <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <label html-for='location'>Location</label>
          <input id='location' type='text' onChange={(e) => setLocation(e.target.value)} required></input>
        </div>
        <div className='form-input'>
          <label html-for='King_Suite'>King Suite Rooms</label>
          <input id='King_Suite' type='number' onChange={(e) => setKingSuite(e.target.value)} required></input>
        </div>
        <div className='form-input'>
          <label html-for='Queen_Suite'>Queen Suite Rooms</label>
          <input id='Queen_Suite' type='number' onChange={(e) => setQueenSuite(e.target.value)} required></input>
        </div>
        <div className='form-input'>
          <label html-for='Junior_Suite'>Junior Suite Rooms</label>
          <input id='Junior_Suite' type='number' onChange={(e) => setJuniorSuite(e.target.value)} required></input>
        </div>
        <div className='form-input'>
          <label html-for='Queen_Deluxe'>Queen Deluxe Rooms</label>
          <input id='Queen_Deluxe' type='number' onChange={(e) => setQueenDeluxe(e.target.value)} required></input>
        </div>
        <input className='green-button' type='submit' value='Add Location'></input>  
        </form>
        
      </div>
    </>
  )
}

export default AdminDashboard