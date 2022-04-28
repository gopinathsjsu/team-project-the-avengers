import Navbar from './components/Navbar';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Find from './pages/Find';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
<<<<<<< HEAD
import BookingDetails from './components/BookingDetails';
import Reservations from './components/Reservations';
=======
import Admin from './pages/Admin';
>>>>>>> admin
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Find />} />
          <Route path='/join' element={<Join />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/booking-details' element={<BookingDetails />} />
          <Route path='/reservations' element={<Reservations />} />
=======
          <Route path='/' element={<Home/>} />
          <Route path='search' element={<Find/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/admin' element={<Admin/>} />

>>>>>>> admin
        </Routes>
      </Router>
    </>
  );
}

export default App;
