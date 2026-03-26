import React from 'react';
import Hero from './Hero';
import About from './About';
import Features from './Features';
import Gallery from './Gallery';
import FounderHonor from './FounderHonor';
import Schedule from './Schedule';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FounderHonor />
      <About />
      <Features />
      <Schedule />
      <Gallery />
    </>
  );
};

export default Home;
