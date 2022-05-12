import Navbar from './components/Navbar';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Find from './pages/Find';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import BookingDetails from './components/BookingDetails';
import Reservations from './pages/Reservations';
import Admin from './pages/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/admin/AdminRoute';
import './App.css';
import EditReservationForm from './components/EditReservationForm';
import EditReservationConfirmation from './components/EditReservationConfirmation';

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
          <Route path='/reservations/edit' element={<ProtectedRoute><EditReservationForm /></ProtectedRoute>}></Route>
          <Route path='/reservations/edit/confirmation' element={<ProtectedRoute><EditReservationConfirmation /></ProtectedRoute>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
