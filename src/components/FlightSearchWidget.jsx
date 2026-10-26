import React, { useState } from 'react';
import {
  Plane,
  ArrowRightLeft,
  MapPin,
  Calendar,
  Users,
  Search,
  Percent,
  Tag,
  Globe,
  PhoneCall,
  ShieldCheck,
  X
} from 'lucide-react';

export default function FlightSearchWidget({ defaultOrigin = 'New York (JFK)', defaultDestination = 'Miami (MIA)' }) {
  const [tripType, setTripType] = useState('roundtrip');
  const [origin, setOrigin] = useState(defaultOrigin);
  const [destination, setDestination] = useState(defaultDestination);
  const [departDate, setDepartDate] = useState('2026-11-12');
  const [returnDate, setReturnDate] = useState('2026-11-19');
  const [passengers, setPassengers] = useState('1 Traveler, Economy');
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedFlightQuote, setSelectedFlightQuote] = useState(null);

  const swapAirports = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSelectedFlightQuote({
      origin,
      destination,
      dates: tripType === 'roundtrip' ? `${departDate} - ${returnDate}` : `${departDate}`,
      passengers,
      price: '$219'
    });
    setSearchModalOpen(true);
  };

  return (
    <>
      <div className="search-widget-wrapper">
        <form onSubmit={handleSearchSubmit}>
          {/* Trip Type Tabs */}
          <div className="search-tabs-row">
            <div className="trip-type-options">
              <button
                type="button"
                className={`trip-type-btn ${tripType === 'roundtrip' ? 'active' : ''}`}
                onClick={() => setTripType('roundtrip')}
              >
                <ArrowRightLeft size={14} /> Round Trip
              </button>
              <button
                type="button"
                className={`trip-type-btn ${tripType === 'oneway' ? 'active' : ''}`}
                onClick={() => setTripType('oneway')}
              >
                <Plane size={14} /> One Way
              </button>
              <button
                type="button"
                className={`trip-type-btn ${tripType === 'multicity' ? 'active' : ''}`}
                onClick={() => setTripType('multicity')}
              >
                <Globe size={14} /> Multi City
              </button>
            </div>
            <div className="trip-quick-badge">
              <Percent size={14} /> Low Fare Finder Active
            </div>
          </div>

          {/* Input Fields */}
          <div className="search-inputs-grid">
            {/* From Field */}
            <div className="search-field-box">
              <span className="field-label">
                <Plane size={12} color="#287A74" /> From (Origin)
              </span>
              <input
                type="text"
                className="field-value-primary"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="Enter city or airport"
                required
              />
              <span className="field-value-sub">All major airport</span>
            </div>

            {/* Swap Button */}
            <div className="swap-btn-wrap">
              <button
                type="button"
                className="swap-places-btn"
                title="Swap Origin and Destination"
                onClick={swapAirports}
              >
                <ArrowRightLeft size={16} />
              </button>
            </div>

            {/* To Field */}
            <div className="search-field-box">
              <span className="field-label">
                <MapPin size={12} color="#287A74" /> To (Destination)
              </span>
              <input
                type="text"
                className="field-value-primary"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                required
              />
              <span className="field-value-sub">Primary airport</span>
            </div>

            {/* Depart Date */}
            <div className="search-field-box">
              <span className="field-label">
                <Calendar size={12} color="#287A74" /> Departure
              </span>
              <input
                type="date"
                className="field-value-primary"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                style={{ fontSize: '14px', border: 'none' }}
              />
              <span className="field-value-sub">Flexible dates</span>
            </div>

            {/* Return Date (if roundtrip) */}
            <div className="search-field-box">
              <span className="field-label">
                <Calendar size={12} color="#287A74" /> Return
              </span>
              <input
                type="date"
                className="field-value-primary"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={tripType === 'oneway'}
                style={{ fontSize: '14px', border: 'none', opacity: tripType === 'oneway' ? 0.4 : 1 }}
              />
              <span className="field-value-sub">
                {tripType === 'oneway' ? 'One-Way Journey' : '7 days duration'}
              </span>
            </div>

            {/* Passengers & Class */}
            <div className="search-field-box">
              <span className="field-label">
                <Users size={12} color="#287A74" /> Travelers & Cabin
              </span>
              <select
                className="field-value-primary"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                style={{ fontSize: '14px', border: 'none', cursor: 'pointer' }}
              >
                <option value="1 Traveler, Economy">1 Adult, Economy</option>
                <option value="2 Travelers, Economy">2 Adults, Economy</option>
                <option value="1 Traveler, Premium Economy">1 Adult, Premium Eco</option>
                <option value="1 Traveler, Business">1 Adult, Business Class</option>
                <option value="2 Travelers, Business">2 Adults, Business Class</option>
                <option value="Family (2 Adults, 2 Children)">Family (2 Adults, 2 Children)</option>
              </select>
              <span className="field-value-sub">Best price guarantee</span>
            </div>

            {/* Search CTA */}
            <button type="submit" className="btn-search-flights">
              <Search size={18} />
              <span>SEARCH FLIGHTS</span>
            </button>
          </div>

          {/* Sub filters */}
          <div className="search-sub-bar">
            <div className="search-checkboxes">
              <label className="search-checkbox-label">
                <input type="checkbox" defaultChecked /> Direct / Non-Stop Flights Preferred
              </label>
              <label className="search-checkbox-label">
                <input type="checkbox" defaultChecked /> Refundable Fares Only
              </label>
              <label className="search-checkbox-label">
                <input type="checkbox" /> Nearby Alternate Airports
              </label>
            </div>
            <div className="search-promo-tag">
              <Tag size={13} /> Call <strong>+1-844-672-0280</strong> for unpublished $30-$100 airline rebates
            </div>
          </div>
        </form>
      </div>

      {/* SEARCH / BOOKING MODAL */}
      {searchModalOpen && selectedFlightQuote && (
        <div className="modal-overlay" onClick={() => setSearchModalOpen(false)}>
          <div className="flight-modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-title">
                Flight Search Results: {selectedFlightQuote.origin} → {selectedFlightQuote.destination}
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSearchModalOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-phone-callout">
                <div>
                  <div style={{ fontWeight: 800, color: '#1E5E59', fontSize: '15px' }}>
                    📞 Exclusive Phone Discount Available!
                  </div>
                  <div style={{ fontSize: '13px', color: '#475569' }}>
                    Mention Promo Code <strong>HOOKFLY</strong> to get up to $50 off this flight over the phone.
                  </div>
                </div>
                <a
                  href="tel:+18446720280"
                  className="btn-urgent-call"
                  style={{ padding: '8px 18px', fontSize: '14px' }}
                >
                  <PhoneCall size={16} /> 1-844-672-0280
                </a>
              </div>

              {/* Flight Result 1 */}
              <div className="flight-result-item">
                <div className="flight-result-times">
                  <div className="flight-node">
                    <span className="flight-time">06:45 AM</span>
                    <span className="flight-airport">{selectedFlightQuote.origin}</span>
                  </div>

                  <div className="flight-duration-track">
                    <span className="duration-text">2h 55m</span>
                    <div className="track-line"></div>
                    <span className="stops-badge">Non-stop</span>
                  </div>

                  <div className="flight-node">
                    <span className="flight-time">09:40 AM</span>
                    <span className="flight-airport">{selectedFlightQuote.destination}</span>
                  </div>
                </div>

                <div className="flight-price-col">
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Total per passenger</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 800, color: '#1E5E59' }}>
                    {selectedFlightQuote.price}
                  </div>
                  <a
                    href="tel:+18446720280"
                    className="btn-search-flights"
                    style={{ height: '42px', padding: '0 20px', fontSize: '14px', textDecoration: 'none' }}
                  >
                    <PhoneCall size={15} /> Book by Phone
                  </a>
                </div>
              </div>

              {/* Flight Result 2 */}
              <div className="flight-result-item">
                <div className="flight-result-times">
                  <div className="flight-node">
                    <span className="flight-time">01:15 PM</span>
                    <span className="flight-airport">{selectedFlightQuote.origin}</span>
                  </div>

                  <div className="flight-duration-track">
                    <span className="duration-text">3h 05m</span>
                    <div className="track-line"></div>
                    <span className="stops-badge">Non-stop</span>
                  </div>

                  <div className="flight-node">
                    <span className="flight-time">04:20 PM</span>
                    <span className="flight-airport">{selectedFlightQuote.destination}</span>
                  </div>
                </div>

                <div className="flight-price-col">
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Total per passenger</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 800, color: '#1E5E59' }}>
                    ${parseInt(selectedFlightQuote.price.replace('$', '')) + 25}
                  </div>
                  <a
                    href="tel:+18446720280"
                    className="btn-search-flights"
                    style={{ height: '42px', padding: '0 20px', fontSize: '14px', textDecoration: 'none' }}
                  >
                    <PhoneCall size={15} /> Book by Phone
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b', justifyContent: 'center', marginTop: '10px' }}>
                <ShieldCheck size={16} color="#16a34a" />
                <span>Price Match Guaranteed • 24-Hour Free Cancellation • Instant E-Ticket Issuance</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
