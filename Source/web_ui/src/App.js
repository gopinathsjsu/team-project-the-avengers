import Navbar from './components/Navbar';
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import Join from './pages/Join';
import Find from './pages/Find';
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
