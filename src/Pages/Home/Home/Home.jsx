import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HelthCose from '../HelthCose/HelthCose';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <HelthCose />
    </div>
  );
};

export default Home;