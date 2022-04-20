import Navbar from './components/Navbar';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Find from './pages/Find';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='search' element={<Find/>} />
          <Route path='/join' element={<Join/>} />
          <Route path='/sign-in' element={<SignIn/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/payment' element={<Payment/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
