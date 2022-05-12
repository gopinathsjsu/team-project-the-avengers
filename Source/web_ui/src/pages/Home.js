import React from 'react';
import HeroImage from '../components/HeroImage';
import SearchAvailabilityForm from '../components/SearchAvailabilityForm';

// FM IMPORT STARTS
import HomeFeatured from '../components/HomeFeatured';
// FM IMPORT ENDS

function Home() {
  return (
    <>
      <SearchAvailabilityForm />
      <HeroImage />
      <HomeFeatured />
    </>
  )
}

export default Home