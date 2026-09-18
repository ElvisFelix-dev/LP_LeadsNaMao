import {  Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';

import LandingPage from './pages/LandingPage';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </>
  );
}
