import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, PhoneCall, Clock, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand Info */}
          <div>
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="logo-icon-wrap">
                <Plane size={24} />
              </div>
              <div className="logo-text-wrap">
                <span className="brand-name" style={{ color: '#ffffff' }}>
                  Travelo<span style={{ color: '#48b8b0' }}>Hook</span>
                </span>
                <span className="brand-tagline" style={{ color: '#94a3b8' }}>Fly Smart • Save Big</span>
              </div>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: '#94a3b8', marginBottom: '16px' }}>
              TraveloHook is an independent travel portal providing cheap flights, discounted airline tickets, and 24/7 personalized travel desk service worldwide.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="footer-badge-tag">IATA Certified</span>
              <span className="footer-badge-tag">ARC Partner</span>
              <span className="footer-badge-tag">256-Bit SSL</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/flight-deals">Flight Deals</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h4 className="footer-col-title">Destinations</h4>
            <ul className="footer-links-list">
              <li><Link to="/flights-to-boston">Flights to Boston</Link></li>
              <li><Link to="/flights-to-chicago">Flights to Chicago</Link></li>
              <li><Link to="/flights-to-las-vegas">Flights to Las Vegas</Link></li>
              <li><Link to="/flights-to-miami">Flights to Miami</Link></li>
              <li><Link to="/flights-to-new-york">Flights to New York</Link></li>
              <li><Link to="/flights-to-san-francisco">Flights to San Francisco</Link></li>
            </ul>
          </div>

          {/* Col 4: Legal & Policies */}
          <div>
            <h4 className="footer-col-title">Legal & Policies</h4>
            <ul className="footer-links-list">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/taxes-and-fees">Taxes & Fees</Link></li>
              <li><Link to="/advertiser-policy">Advertiser Policy</Link></li>
              <li><Link to="/ccpa">CCPA Compliance</Link></li>
              <li><Link to="/gdpr">GDPR Compliance</Link></li>
            </ul>
          </div>

          {/* Col 5: 24/7 Travel Desk */}
          <div>
            <h4 className="footer-col-title">24/7 Travel Desk</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <PhoneCall size={18} />
                <div>
                  <strong>Toll-Free Helpline:</strong><br />
                  <a href="tel:+18446720280" style={{ color: '#48b8b0', fontWeight: 'bold' }}>+1-844-672-0280</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <strong>Customer Support:</strong><br />
                  <a href="mailto:support@travelohook.com" style={{ color: '#cbd5e1' }}>support@travelohook.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <div>
                  <strong>Hours:</strong><br />
                  24 Hours / 7 Days a Week / 365 Days
                </div>
              </div>
              <div className="footer-contact-item">
                <ShieldCheck size={18} />
                <div>
                  <strong>Security:</strong><br />
                  Bank-Grade 256-Bit SSL Encrypted
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-disclaimer">
            Disclaimer: TraveloHook is an independent online travel agency and is not directly affiliated with any specific airline or government entity. All flight prices are in USD and subject to seat availability, airline fare rules, and tax regulations at the time of final ticketing. For immediate unpublished deals and personalized booking help, call our toll-free customer desk at +1-844-672-0280.
          </p>
          <p>© {new Date().getFullYear()} TraveloHook.com. All Rights Reserved. Fly Smart, Save Big.</p>
        </div>
      </div>
    </footer>
  );
}
