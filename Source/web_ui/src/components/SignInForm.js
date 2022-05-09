import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAuthenticated } from './auth';
import './SignInForm.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  //const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password
    };

    axios.post('/userSignup/login1', info).then(response => {
      console.log(response);
      const userInfo = {
        token: response.data.token,
        userRole: response.data.user_type
      }
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      if (userInfo.userRole === 'admin') {
        navigate('/admin');
      } else {
        navigate('/reservations');
      }
    }).catch(error => {
      setErrorMessage('Incorrect email or password');
      console.log(error);
    })
  }

  return (
    <>
      <div className='sign-in-form-container'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className='error-message'>{errorMessage}</div>
          <button className='orange-button' type='submit'>Sign In</button>
        </form>
        <div>Don't have an account? <a href='/join'>Join</a></div>
      </div>
    </>
  )
}

export default SignInForm