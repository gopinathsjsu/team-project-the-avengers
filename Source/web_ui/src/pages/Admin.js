import React from 'react';
// import AdminFileUploadForm from '../components/admin/AdminFileUploadForm';
import AdminLocationTable from '../components/admin/AdminLocationTable';
import AdminHotelTable from '../components/admin/AdminHotelTable';
import AdminAmenitiesTable from '../components/admin/AdminAmenitiesTable';

function Admin() {
  return (
    <>
      {/* <AdminFileUploadForm /> */}
      <AdminHotelTable />
      <AdminLocationTable />
      <AdminAmenitiesTable />
    </>
  )
}

export default Admin