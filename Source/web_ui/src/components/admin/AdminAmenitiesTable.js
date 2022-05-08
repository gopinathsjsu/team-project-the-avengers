import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AmenityCard from './AmenityCard';
import './AdminPage.css';

function AdminAmenitiesTable() {
  const [amenities, setAmenities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAmenitiesTable() {
      await axios.post('/getAmenities').then(response => {
        console.log(response);
        setAmenities(response.data);
      }).catch(error => {
        console.log(error);
      })
      setLoading(false);
    }

    fetchAmenitiesTable();
  }, []);
  
  return (
    <>
      {!loading ? (
        <div className='amenities-table'>
          <h1>Amenities</h1>
          <div className='header'>
            <div className='amenities-table-column-header-2'>Description</div>
            <div className='amenities-table-column-header-1'>Price</div>
            <div className='amenities-table-button-column'></div>
          </div>
          {amenities?.map((amenity) => (
            <AmenityCard
              key={amenity.amenity_id}
              id={amenity.amenity_id}
              description={amenity.amenity_description}
              price={amenity.amenity_price}
            />
          ))}
        </div>
      ) : (
        <> </>
      )}
    </>
  )
}

export default AdminAmenitiesTable