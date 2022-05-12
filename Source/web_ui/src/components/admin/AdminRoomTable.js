import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAdmin } from '../auth';
import RoomCard from './RoomCard';
import './AdminPage.css';

function AdminRoomTable() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchRoomTable() {
      const { token } = isAdmin();
      await axios.post('/getPriceTable', {token: token}).then(response => {
        // console.log(response);
        setRooms(response.data);
      }).catch(error => {
        setErrorMessage(error.response.data.message?error.response.data.message: 'Something went wrong. Please try again leter.');
        // console.log(error);
      })
      setLoading(false);
    }

    fetchRoomTable();
  }, []);
  
  return (
    <>
      {!loading && !errorMessage ? (
        <div className='room-table'>
          <h1>Room Price</h1>
          <div className='header'>
            <div className='room-table-column-header-2'>Room Type</div>
            <div className='room-table-column-header-1'>Member Price</div>
            {/* <div className='room-table-column-header-1'>Guest Price</div> */}
            <div className='amenities-table-button-column'></div>
          </div>
          {rooms?.map((room) => (
            <RoomCard
              key={room.room_type}
              roomType={room.room_type}
              member={room.member}
              guest={room.guest}
            />
          ))}
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default AdminRoomTable