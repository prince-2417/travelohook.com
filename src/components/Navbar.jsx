import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Plane,
  PhoneCall,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Compass,
  Tag,
  Info,
  Mail
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-hotline-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <Sparkles size={14} color="#48b8b0" /> Exclusive Phone-Only Fares: Call & Save Extra $30 Off Per Ticket
            </span>
            <span className="top-bar-item highlight">
              <Clock size={14} /> 24/7 Concierge Desk Active
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item">
              <ShieldCheck size={14} color="#22c55e" /> Best Price Guarantee
            </span>
            <span className="top-bar-item">
              <PhoneCall size={14} color="#48b8b0" /> Toll-Free: <strong>+1-844-672-0280</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="main-navbar">
        <div className="container navbar-container">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="logo-icon-wrap">
              <Plane size={24} />
            </div>
            <div className="logo-text-wrap">
              <span className="brand-name">
                Travelo<span>Hook</span>
              </span>
              <span className="brand-tagline">Fly Smart • Save Big</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links-list">
              <li className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`nav-link-item ${isActive('/flight-deals') ? 'active' : ''}`}>
                <Link to="/flight-deals">Flight Deals</Link>
              </li>

              {/* Destinations Dropdown */}
              <li
                className="nav-link-item dropdown-parent"
                style={{ position: 'relative' }}
                onMouseEnter={() => setDestDropdownOpen(true)}
                onMouseLeave={() => setDestDropdownOpen(false)}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    color: location.pathname.includes('flights-to-') ? '#287A74' : '#334155'
                  }}
                >
                  Destinations <ChevronDown size={14} />
                </span>

                {destDropdownOpen && (
                  <div className="dest-dropdown-menu animate-fade-in">
                    <Link to="/flights-to-new-york" onClick={() => setDestDropdownOpen(false)}>
                      Flights to New York (JFK)
                    </Link>
                    <Link to="/flights-to-miami" onClick={() => setDestDropdownOpen(false)}>
                      Flights to Miami (MIA)
                    </Link>
                    <Link to="/flights-to-chicago" onClick={() => setDestDropdownOpen(false)}>
                      Flights to Chicago (ORD)
                    </Link>
                    <Link to="/flights-to-las-vegas" onClick={() => setDestDropdownOpen(false)}>
                      Flights to Las Vegas (LAS)
                    </Link>
                    <Link to="/flights-to-san-francisco" onClick={() => setDestDropdownOpen(false)}>
                      Flights to San Francisco (SFO)
                    </Link>
                    <Link to="/flights-to-boston" onClick={() => setDestDropdownOpen(false)}>
                      Flights to Boston (BOS)
                    </Link>
                  </div>
                )}
              </li>

              <li className={`nav-link-item ${isActive('/about-us') ? 'active' : ''}`}>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className={`nav-link-item ${isActive('/contact-us') ? 'active' : ''}`}>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          {/* Right Call CTA & Mobile Toggle */}
          <div className="navbar-cta-group">
            <a href="tel:+18446720280" className="nav-phone-card animate-pulse-call">
              <div className="nav-phone-icon">
                <PhoneCall size={18} />
              </div>
              <div className="nav-phone-text">
                <span className="nav-phone-label">24/7 Support • Call Now</span>
                <span className="nav-phone-number">+1-844-672-0280</span>
              </div>
            </a>

            <button
              type="button"
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer animate-fade-in">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/flight-deals" onClick={() => setMobileMenuOpen(false)}>Flight Deals</Link>
            
            <div className="mobile-drawer-subheading">Destinations</div>
            <Link to="/flights-to-new-york" onClick={() => setMobileMenuOpen(false)}>Flights to New York</Link>
            <Link to="/flights-to-miami" onClick={() => setMobileMenuOpen(false)}>Flights to Miami</Link>
            <Link to="/flights-to-chicago" onClick={() => setMobileMenuOpen(false)}>Flights to Chicago</Link>
            <Link to="/flights-to-las-vegas" onClick={() => setMobileMenuOpen(false)}>Flights to Las Vegas</Link>
            <Link to="/flights-to-san-francisco" onClick={() => setMobileMenuOpen(false)}>Flights to San Francisco</Link>
            <Link to="/flights-to-boston" onClick={() => setMobileMenuOpen(false)}>Flights to Boston</Link>

            <div className="mobile-drawer-subheading">Company</div>
            <Link to="/about-us" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/contact-us" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

            <a href="tel:+18446720280" className="btn-urgent-call" style={{ marginTop: '16px', textAlign: 'center', justifyContent: 'center' }}>
              <PhoneCall size={18} /> Call 1-844-672-0280
            </a>
          </div>
        )}
      </header>
    </>
  );
}
