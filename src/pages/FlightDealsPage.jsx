import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Tag, Sparkles, Filter, PhoneCall, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import FlightSearchWidget from '../components/FlightSearchWidget';

const ALL_DEALS = [
  {
    id: 1,
    city: 'New York',
    code: 'JFK',
    from: 'Miami (MIA)',
    price: 189,
    originalPrice: 399,
    airline: 'Delta Air Lines',
    category: 'domestic',
    link: '/flights-to-new-york',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    city: 'Miami',
    code: 'MIA',
    from: 'New York (JFK)',
    price: 229,
    originalPrice: 449,
    airline: 'American Airlines',
    category: 'beach',
    link: '/flights-to-miami',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 3,
    city: 'Chicago',
    code: 'ORD',
    from: 'Atlanta (ATL)',
    price: 219,
    originalPrice: 429,
    airline: 'United Airlines',
    category: 'domestic',
    link: '/flights-to-chicago',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 4,
    city: 'Las Vegas',
    code: 'LAS',
    from: 'Los Angeles (LAX)',
    price: 159,
    originalPrice: 399,
    airline: 'Southwest Airlines',
    category: 'weekend',
    link: '/flights-to-las-vegas',
    image: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 5,
    city: 'Boston',
    code: 'BOS',
    from: 'Chicago (ORD)',
    price: 179,
    originalPrice: 389,
    airline: 'JetBlue Airways',
    category: 'domestic',
    link: '/flights-to-boston',
    image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 6,
    city: 'San Francisco',
    code: 'SFO',
    from: 'Seattle (SEA)',
    price: 199,
    originalPrice: 479,
    airline: 'Alaska Airlines',
    category: 'weekend',
    link: '/flights-to-san-francisco',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 7,
    city: 'Orlando',
    code: 'MCO',
    from: 'Boston (BOS)',
    price: 179,
    originalPrice: 419,
    airline: 'Delta Air Lines',
    category: 'beach',
    link: '/flights-to-miami',
    image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 8,
    city: 'Los Angeles',
    code: 'LAX',
    from: 'Denver (DEN)',
    price: 249,
    originalPrice: 489,
    airline: 'American Airlines',
    category: 'domestic',
    link: '/flight-deals',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 9,
    city: 'London',
    code: 'LHR',
    from: 'New York (JFK)',
    price: 489,
    originalPrice: 899,
    airline: 'British Airways',
    category: 'international',
    link: '/flight-deals',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80'
  }
];

export default function FlightDealsPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = ALL_DEALS.filter((d) => {
    const matchesTab = activeTab === 'all' || d.category === activeTab;
    const matchesSearch = d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.from.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="page-wrapper" style={{ padding: '40px 0 70px 0' }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-head-wrap" style={{ marginBottom: '28px' }}>
          <div className="section-badge-pill">
            <Sparkles size={14} /> Today's Exclusive Airline Discounts
          </div>
          <h1 className="section-main-title">
            Handpicked <span>Flight Deals</span> & Unpublished Fares
          </h1>
          <p className="section-sub-desc">
            Save up to 45% on round-trip and one-way tickets across premium airlines. Book online or call our 24/7 flight desk for extra offline savings!
          </p>
        </div>

        {/* Flight Search Engine Widget */}
        <div style={{ marginBottom: '40px' }}>
          <FlightSearchWidget />
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          <div className="deals-filter-bar" style={{ margin: 0 }}>
            <button className={`deals-filter-chip ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>
              All Deals ({ALL_DEALS.length})
            </button>
            <button className={`deals-filter-chip ${activeTab === 'domestic' ? 'active' : ''}`} onClick={() => setActiveTab('domestic')}>
              Domestic USA
            </button>
            <button className={`deals-filter-chip ${activeTab === 'beach' ? 'active' : ''}`} onClick={() => setActiveTab('beach')}>
              Beach & Sun
            </button>
            <button className={`deals-filter-chip ${activeTab === 'weekend' ? 'active' : ''}`} onClick={() => setActiveTab('weekend')}>
              Weekend Getaways
            </button>
            <button className={`deals-filter-chip ${activeTab === 'international' ? 'active' : ''}`} onClick={() => setActiveTab('international')}>
              International
            </button>
          </div>

          <input
            type="text"
            placeholder="Search by city or airport..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '10px 18px',
              borderRadius: '100px',
              border: '1.5px solid #a6dad6',
              background: '#fff',
              fontSize: '14px',
              minWidth: '240px'
            }}
          />
        </div>

        {/* Deals Cards Grid */}
        <div className="deals-cards-grid">
          {filtered.map((deal) => (
            <div key={deal.id} className="flight-deal-card">
              <div className="card-image-box">
                <img src={deal.image} alt={deal.city} loading="lazy" />
                <span className="card-top-tag">{deal.airline}</span>
                <span className="card-deal-discount">SAVE {Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}%</span>
              </div>
              <div className="card-body-content">
                <div className="card-route-header">
                  <h3 className="card-city-name">{deal.city}</h3>
                  <span className="card-route-codes">{deal.code}</span>
                </div>
                <div className="card-travel-specs">
                  <span>Route: {deal.from} → {deal.city}</span>
                </div>

                <div className="card-price-row">
                  <div className="price-meta-wrap">
                    <span className="price-label-text">Starting from</span>
                    <div className="price-actual-wrap">
                      <span className="price-original">${deal.originalPrice}</span>
                      <span className="price-discounted">${deal.price}</span>
                    </div>
                  </div>
                  <Link to={deal.link} className="btn-card-book">
                    <span>View Deal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Phone Callout */}
        <div className="phone-promo-box" style={{ background: '#eef7f6', border: '1.5px solid #a6dad6', borderRadius: '16px', padding: '28px', marginTop: '48px', color: '#0f172a' }}>
          <div className="phone-promo-left">
            <div className="promo-call-icon">
              <PhoneCall size={28} />
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>
                Looking for Unpublished Wholesale Airline Fares?
              </h3>
              <p style={{ color: '#475569', fontSize: '14px' }}>
                Airlines release private bulk fares exclusively to phone travel desks. Call now and mention code <strong>DEALHOOK</strong> for up to $60 off per passenger.
              </p>
            </div>
          </div>
          <a href="tel:+18446720280" className="btn-urgent-call">
            <PhoneCall size={18} /> Call +1-844-672-0280
          </a>
        </div>
      </div>
    </div>
  );
}
