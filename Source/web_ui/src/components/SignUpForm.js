import React, { useState } from 'react';
import axios from 'axios';
import './SignUpForm.css';

function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      userName: username,
      email: email,
      password: password
    };

    axios.post('', info).then(response => {
      console.log(response);
      alert("Account successfully created");
    }).catch(error => {
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
            <input id='phone-number' type='text' onChange={(e) => setPhoneNumber(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' onChange={(e) => setUsername(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <input className='orange-button' type='submit' value='Join'></input>
        </form>
        <div>Already have an account? <a href='/sign-in'>Sign In</a></div>
      </div>
    </>
  )
}

export default SignUpForm