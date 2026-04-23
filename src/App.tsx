import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import Home from '@/features/home/Home';
import RoboticsTournament from '@/features/tournament/RoboticsTournament';
import GeekCulture from '@/features/geek/GeekCulture';
import Oxethon from '@/features/oxethon/Oxethon';
import Workshops from '@/features/workshops/Workshops';
import Visit from '@/features/visit/Visit';
import SchedulePage from '@/features/visit/SchedulePage';
import MapPage from '@/features/visit/MapPage';
import AboutPage from '@/features/about/AboutPage';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visita" element={<Visit />} />
          <Route path="/programacao" element={<SchedulePage />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/torneio" element={<RoboticsTournament />} />
          <Route path="/geek" element={<GeekCulture />} />
          <Route path="/oxethon" element={<Oxethon />} />
          <Route path="/oficinas" element={<Workshops />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
