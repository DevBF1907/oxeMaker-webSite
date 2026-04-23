
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import Gallery from './Gallery';
import FounderHonor from './FounderHonor';

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Features />
      <FounderHonor />
      <Gallery />
    </>
  );
};

export default Home;
