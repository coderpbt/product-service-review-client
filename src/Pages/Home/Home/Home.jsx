import React from 'react';
import useHooks from '../../../component/Sheard/Hooks/useHooks';
import Proven from '../../ProvenPage/Proven';
import About from '../About/About';
import Banner from '../Banner/Banner';
import HelthCose from '../HelthCose/HelthCose';
import Services from '../Services/Services';

const Home = () => {
  useHooks('Home');
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <HelthCose />
      <Proven />
    </div>
  );
};

export default Home;