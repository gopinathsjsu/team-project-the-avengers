import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
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
              <Link to='/' className='nav-links'>
                Reserve
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-container-right">
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Sign In or Join
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar