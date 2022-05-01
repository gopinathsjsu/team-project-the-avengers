import React, { useState } from 'react';
import axios from 'axios';
import './AdminFileUploadForm.css';

function AdminFileUploadForm() {
  const [fileName, setFileName] = useState('');
  const [dataFile, setDataFile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('dataFile', dataFile);
    formData.append('fileType', fileName);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    console.log(fileName);
    axios.post('/admin/uploadFiles', formData, config).then(response => {
      console.log(response);
      setErrorMessage('');
    }).catch(error => {
      console.log(error);
      setErrorMessage('Sorry, something went wrong. Please try again later.');
    })
  }

  return (
    <div>
      <form className='file-upload-form' onSubmit={handleSubmit}>
        <h1>File Upload</h1>
        <div>
          <div className='form-input'>
            <select onChange={(e) => setFileName(e.target.value)} defaultValue='' required>
              <option value='' disabled>Select a Data File</option>
              <option value='Hotel'>Hotel</option>
              <option value='location'>Location</option>
            </select>
          </div>
          <div className='form-input'>
            <input type='file' accept='.csv' onChange={(e) => setDataFile(e.target.files[0])}></input>
          </div>
        </div>
        <div className='error-message'>{errorMessage}</div>
        <button className='upload-button' type='submit'>Upload</button>
      </form>
    </div>
  )
}

export default AdminFileUploadForm