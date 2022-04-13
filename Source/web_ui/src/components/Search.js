import React, { useState } from 'react';
import './Search.css';

function Search() {
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* make a get request to backend to get hotels that matches with what the user searched for */
  }

  return (
    <>
      <div className='search-bar'>
        <form onSubmit={handleSubmit}>
          <input className='search-field' type='text' placeholder='Location' onChange={(e) => setSearchField(e.target.value)}></input>
          <input className='search-button' type='submit' value='Find Hotels'></input>
        </form>
      </div>
    </>
  )
}

export default Search