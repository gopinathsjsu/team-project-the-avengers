import Navbar from './components/Navbar';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Find from './pages/Find';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import BookingDetails from './components/BookingDetails';
import Reservations from './components/Reservations';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/admin/AdminRoute';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Find />} />
          <Route path='/join' element={<Join />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/booking' element={<ProtectedRoute><Booking /></ProtectedRoute>} />
          <Route path='/payment' element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path='/booking-details' element={<ProtectedRoute><BookingDetails /></ProtectedRoute>} />
          <Route path='/reservations' element={<ProtectedRoute><Reservations /></ProtectedRoute>} />
          <Route path='/admin-dashboard' element={<AdminRoute><Admin /></AdminRoute>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
