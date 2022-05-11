import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './SignUpForm.css';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    } else {
      setErrorMessage('');
    }

    if (password.length < 8) {
      setErrorMessage('Your password must be at least 8 characters long.');
      return;
    } else {
      setErrorMessage('');
    }

    const info = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      email: email,
      password: password
    };

    axios.post('/userSignup/signup1', info).then(response => {
      // console.log(response);
      if (response.data.code === 200) {
        alert('Account successfully created');
        navigate('/sign-in');
      } else {
        alert('Sorry, something went wrong. Please try again later.');
      }
    }).catch(error => {
      alert('Sorry, something went wrong. Please try again later.');
      console.log(error);
    })
  }

  return (
    <>
      <div className='sign-up-form-container'>
        <h1>Join</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='first-name'>First Name</label>
            <input id='first-name' type='text' onChange={(e) => setFirstName(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='last-name'>Last Name</label>
            <input id='last-name' type='text' onChange={(e) => setLastName(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='phone-number'>Phone Number</label>
            <input id='phone-number' type='tel' pattern='^\+[1-9]\d{1,14}$' placeholder='+19876543210' onChange={(e) => setPhoneNumber(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input id='confirm-password' type='password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
          </div>
          <div className='error-message'>{errorMessage}</div>
          <button className='orange-button' type='submit'>Join</button>
        </form>
        <div>Already have an account? <a href='/sign-in'>Sign In</a></div>
      </div>
    </>
  )
}

export default SignUpForm