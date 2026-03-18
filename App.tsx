import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import RoboticsTournament from './components/RoboticsTournament';
import GeekCulture from './components/GeekCulture';
import Oxethon from './components/Oxethon';
import Workshops from './components/Workshops';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-oxe-dark text-white font-sans selection:bg-oxe-blue selection:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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
