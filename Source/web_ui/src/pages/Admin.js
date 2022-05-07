import React from 'react';
// import AdminFileUploadForm from '../components/admin/AdminFileUploadForm';
import AdminLocationTable from '../components/admin/AdminLocationTable';
import AdminHotelTable from '../components/admin/AdminHotelTable';

function Admin() {
  return (
    <>
      {/* <AdminFileUploadForm /> */}
      <AdminLocationTable />
      <AdminHotelTable />
    </>
  )
}

export default Admin