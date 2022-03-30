import React from 'react';
import './SignInForm.css';

function SignInForm() {
  return (
    <>
      <div class='sign-in-form-container'>
        <h1>Sign In</h1>
        <form>
          <div class='form-input'>
            <label for='email'>Email</label>
            <input id='email' type='email'></input>
          </div>
          <div class='form-input'>
            <label for='password'>Password</label>
            <input id='password' type='password'></input>
          </div>
          <input class='orange-button' type='submit' value='Sign In'></input>
        </form>
        <div>Don't have an account? <a href='/join'>Join</a></div>
      </div>
    </>
  )
}

export default SignInForm