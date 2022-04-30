import React, { useState } from 'react';
import axios from 'axios';
import './SignInForm.css';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password
    };

    axios.post('/userSignup/login', info).then(response => {
      console.log(response);
      alert("Credentials are correct");
    }).catch(error => {
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
          <input className='orange-button' type='submit' value='Sign In'></input>
        </form>
        <div>Don't have an account? <a href='/join'>Join</a></div>
      </div>
    </>
  )
}

export default SignInForm