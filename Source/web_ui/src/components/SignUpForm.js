import React from 'react'
import './SignUpForm.css'

function SignUpForm() {
  return (
    <>
      <div class='sign-up-form-container'>
        <h1>Join</h1>
        <form>
          <div class='form-input'>
            <label for='first-name'>First Name</label>
            <input id='first-name' type='text'></input>
          </div>
          <div class='form-input'>
            <label for='last-name'>Last Name</label>
            <input id='last-name' type='text'></input>
          </div>
          <div class='form-input'>
            <label for='email'>Email</label>
            <input id='email' type='email'></input>
          </div>
          <div class='form-input'>
            <label for='password'>Password</label>
            <input id='password' type='password'></input>
          </div>
          <input class='orange-button' type='submit' value='Join'></input>
        </form>
        <div>Already have an account? <a href='/sign-in'>Sign In</a></div>
      </div>
    </>
  )
}

export default SignUpForm