import React from 'react';
import AdminLocationTable from '../components/admin/AdminLocationTable';
import AdminHotelTable from '../components/admin/AdminHotelTable';
import AdminAmenitiesTable from '../components/admin/AdminAmenitiesTable';
import AdminRoomTable from '../components/admin/AdminRoomTable';

function Admin() {
  return (
    <>
      <AdminHotelTable />
      <AdminLocationTable />
      <AdminRoomTable />
      <AdminAmenitiesTable />
    </>
  )
}

export default Admin