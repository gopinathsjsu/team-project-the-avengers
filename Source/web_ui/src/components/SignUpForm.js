import React from 'react'
import './SignUpForm.css'

function SignUpForm() {
  return (
    <>
      <div className='sign-up-form-container'>
        <h1>Join</h1>
        <form>
          <div className='form-input'>
            <label htmlFor='first-name'>First Name</label>
            <input id='first-name' type='text'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='last-name'>Last Name</label>
            <input id='last-name' type='text'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email'></input>
          </div>
          <div className='form-input'>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password'></input>
          </div>
          <input className='orange-button' type='submit' value='Join'></input>
        </form>
        <div>Already have an account? <a href='/sign-in'>Sign In</a></div>
      </div>
    </>
  )
}

export default SignUpForm