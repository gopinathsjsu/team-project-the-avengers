import React from 'react';
import HeroImage from '../components/HeroImage';
import SearchAvailabilityForm from '../components/SearchAvailabilityForm';

function Home() {
  return (
    <>
      <SearchAvailabilityForm />
      <HeroImage />
    </>
  )
}

export default Home