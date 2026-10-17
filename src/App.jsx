import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import FlightDealsPage from './pages/FlightDealsPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import DestinationPage from './pages/DestinationPage';
import LegalPage from './pages/LegalPage';

import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="travelohook-site-layout">
        <Navbar />

        <main className="travelohook-main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/flight-deals" element={<FlightDealsPage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />

            {/* Destination Specific Pages */}
            <Route path="/flights-to-boston" element={<DestinationPage slug="boston" />} />
            <Route path="/flights-to-chicago" element={<DestinationPage slug="chicago" />} />
            <Route path="/flights-to-las-vegas" element={<DestinationPage slug="las-vegas" />} />
            <Route path="/flights-to-miami" element={<DestinationPage slug="miami" />} />
            <Route path="/flights-to-new-york" element={<DestinationPage slug="new-york" />} />
            <Route path="/flights-to-san-francisco" element={<DestinationPage slug="san-francisco" />} />
            <Route path="/destinations/:slug" element={<DestinationPage />} />

            {/* Legal & Policy Pages */}
            <Route path="/privacy-policy" element={<LegalPage slug="privacy-policy" />} />
            <Route path="/terms-and-conditions" element={<LegalPage slug="terms-and-conditions" />} />
            <Route path="/refund-policy" element={<LegalPage slug="refund-policy" />} />
            <Route path="/cancellation-policy" element={<LegalPage slug="cancellation-policy" />} />
            <Route path="/cookie-policy" element={<LegalPage slug="cookie-policy" />} />
            <Route path="/taxes-and-fees" element={<LegalPage slug="taxes-and-fees" />} />
            <Route path="/advertiser-policy" element={<LegalPage slug="advertiser-policy" />} />
            <Route path="/ccpa" element={<LegalPage slug="ccpa" />} />
            <Route path="/gdpr" element={<LegalPage slug="gdpr" />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
