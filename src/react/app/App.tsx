import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Home from '../features/home/Home';
import RoboticsTournament from '../features/tournament/RoboticsTournament';
import GeekCulture from '../features/geek/GeekCulture';
import Oxethon from '../features/oxethon/Oxethon';
import Workshops from '../features/workshops/Workshops';
import Visit from '../features/visit/Visit';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-oxe-dark text-white font-sans selection:bg-oxe-blue selection:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visita" element={<Visit />} />
            <Route path="/torneio" element={<RoboticsTournament />} />
            <Route path="/geek" element={<GeekCulture />} />
            <Route path="/oxethon" element={<Oxethon />} />
            <Route path="/oficinas" element={<Workshops />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
