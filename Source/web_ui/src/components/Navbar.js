import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from './auth';
import './Navbar.css';

function Navbar() {
  const [userInfo, setUserInfo] = useState(isAuthenticated());
  
  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(isAuthenticated());
  }, []);

  const logout = () => {
    setUserInfo(false);
    localStorage.removeItem('userInfo');
    navigate('/');
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container-left">
          <Link to='/' className='navbar-logo'>
            Avengers Hotel
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/search' className='nav-links'>
                Find & Reserve
              </Link>
            </li>
            {isAuthenticated() ? (
              <>
                <li className='nav-item'>
                  <Link to='/reservations' className='nav-links'>
                    Reservations
                  </Link>
                </li>
              </>
            ) : (
              <> </>
            )}
          </ul>
        </div>
        <div className="navbar-container-right">
          <ul className='nav-menu'>
            {!isAuthenticated() ? (
              <>
                <li className='nav-item'>
                  <Link to='/sign-in' className='nav-links'>
                    Sign In
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/join' className='nav-links'>
                    Join
                  </Link>
                </li>
              </>
            ) : (
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar