import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Plane,
  PhoneCall,
  ShieldCheck,
  Tag,
  Lock,
  Headphones,
  ArrowRightLeft,
  Calendar,
  Users,
  ChevronDown,
  Sparkles,
  Star,
  MapPin,
  Clock,
  Compass,
  X,
  CreditCard,
  Award,
  Globe,
  Percent,
  Search,
  ChevronUp
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import FlightSearchWidget from '../components/FlightSearchWidget';

const FLIGHT_DEALS = [
  {
    id: 1,
    city: 'New York',
    code: 'JFK / EWR',
    origin: 'Miami (MIA)',
    price: 189,
    originalPrice: 399,
    category: 'east',
    airline: 'Delta & United',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=700&q=80',
    tag: 'Trending',
    link: '/flights-to-new-york'
  },
  {
    id: 2,
    city: 'Miami',
    code: 'MIA',
    origin: 'New York (JFK)',
    price: 229,
    originalPrice: 449,
    category: 'beach',
    airline: 'American Airlines',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=700&q=80',
    tag: 'Best Beach',
    link: '/flights-to-miami'
  },
  {
    id: 3,
    city: 'Los Angeles',
    code: 'LAX',
    origin: 'Chicago (ORD)',
    price: 249,
    originalPrice: 489,
    category: 'west',
    airline: 'United Airlines',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=700&q=80',
    tag: 'Popular',
    link: '/flight-deals'
  },
  {
    id: 4,
    city: 'Chicago',
    code: 'ORD',
    origin: 'Atlanta (ATL)',
    price: 219,
    originalPrice: 429,
    category: 'east',
    airline: 'American Airlines',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&w=700&q=80',
    tag: 'Weekend Deal',
    link: '/flights-to-chicago'
  },
  {
    id: 5,
    city: 'Las Vegas',
    code: 'LAS',
    origin: 'San Francisco (SFO)',
    price: 199,
    originalPrice: 479,
    category: 'west',
    airline: 'Southwest Airlines',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&w=700&q=80',
    tag: 'Hot Deal',
    link: '/flights-to-las-vegas'
  },
  {
    id: 6,
    city: 'Boston',
    code: 'BOS',
    origin: 'New York (JFK)',
    price: 179,
    originalPrice: 389,
    category: 'east',
    airline: 'Delta & JetBlue',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=700&q=80',
    tag: 'Historic City',
    link: '/flights-to-boston'
  },
  {
    id: 7,
    city: 'San Francisco',
    code: 'SFO',
    origin: 'Denver (DEN)',
    price: 269,
    originalPrice: 519,
    category: 'west',
    airline: 'Alaska Airlines',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=700&q=80',
    tag: 'Top Value',
    link: '/flights-to-san-francisco'
  },
  {
    id: 8,
    city: 'Orlando',
    code: 'MCO',
    origin: 'Boston (BOS)',
    price: 179,
    originalPrice: 419,
    category: 'beach',
    airline: 'JetBlue Airways',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1575089776834-8be34696ffb9?auto=format&fit=crop&w=700&q=80',
    tag: 'Family Favorite',
    link: '/flight-deals'
  },
  {
    id: 9,
    city: 'Seattle',
    code: 'SEA',
    origin: 'Los Angeles (LAX)',
    price: 259,
    originalPrice: 509,
    category: 'west',
    airline: 'Delta & Alaska',
    type: 'Non-stop',
    image: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=700&q=80',
    tag: 'Scenic Route',
    link: '/flight-deals'
  }
];

const SPOTLIGHT_DEALS = [
  {
    id: 'spot-1',
    title: 'Cheap Flights to Miami',
    desc: 'Bask in South Beach sunshine & nightlife',
    price: '$189',
    discount: 'SAVE UP TO 35%',
    image: 'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=600&q=80',
    link: '/flights-to-miami'
  },
  {
    id: 'spot-2',
    title: 'Cheap Flights to Chicago',
    desc: 'Deep-dish pizza, architecture & culture',
    price: '$219',
    discount: 'HOT ROUTE',
    image: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80',
    link: '/flights-to-chicago'
  },
  {
    id: 'spot-3',
    title: 'Cheap Flights to San Francisco',
    desc: 'Golden Gate vistas & Pacific coast dining',
    price: '$269',
    discount: 'LIMITED SEATS',
    image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=600&q=80',
    link: '/flights-to-san-francisco'
  },
  {
    id: 'spot-4',
    title: 'Cheap Flights to Boston',
    desc: 'Historic Freedom Trail & harbor cruises',
    price: '$199',
    discount: 'BEST VALUE',
    image: 'https://images.unsplash.com/photo-1501979376754-2ff867a4f659?auto=format&fit=crop&w=600&q=80',
    link: '/flights-to-boston'
  }
];

const FAQ_ITEMS = [
  {
    question: 'How can I book a flight with TraveloHook?',
    answer: 'Booking your flight on TraveloHook is quick and simple. You can either use our instant online flight search engine above to compare 500+ airlines, or call our 24/7 reservation hotline at +1-844-672-0280. Our licensed travel agents can immediately check unpublished airline consolidator rates and lock in your tickets in minutes.'
  },
  {
    question: 'Why should I call instead of booking online?',
    answer: 'Airlines provide specialized "offline" and consolidator fares that cannot be published on public search engines due to airline price parity agreements. When you speak directly with our travel agents, they can access these private bulk inventory fares, often saving you an extra $30 to $100 per passenger on domestic and international itineraries.'
  },
  {
    question: 'What if I need to change or cancel my flight?',
    answer: 'We offer hassle-free ticket assistance! Most tickets qualify for a 24-hour risk-free cancellation policy from the time of booking. For date modifications or airline re-routing, our dedicated 24/7 support desk is available to assist you without waiting on endless airline automated queues.'
  },
  {
    question: 'Can I get better deals by calling our agents?',
    answer: 'Yes! Over 68% of our customers find lower fares over the phone. Our travel specialists have direct access to corporate discounts, last-minute seat clearances, and multi-airline combination fares that automated algorithms usually miss.'
  },
  {
    question: 'What about baggage allowances and seat selection?',
    answer: 'During the booking process, baggage policy details (carry-on vs checked bags) are transparently displayed before checkout. You can also select your preferred seats or request special meals by calling our support desk or entering your airline confirmation code on the airline’s website.'
  },
  {
    question: 'How do I check in for my flight?',
    answer: 'You can check in online via your operating airline’s mobile app or website 24 hours prior to domestic departure and up to 48 hours for international flights using the Airline Confirmation Code (PNR) listed in your TraveloHook confirmation email.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'TraveloHook accepts all major credit and debit cards including Visa, MasterCard, American Express, Discover, and Diners Club. All transactions are protected by bank-grade 256-Bit SSL encryption and verified PCI-DSS compliant checkout.'
  },
  {
    question: 'What are your customer support hours?',
    answer: 'Our customer support center operates 24 Hours a Day, 7 Days a Week, 365 Days a Year. Whether you need urgent assistance at 2:00 AM or are scheduling a vacation months in advance, a friendly travel specialist is always one phone call away at +1-844-672-0280.'
  }
];

export default function Home() {
  const [tripType, setTripType] = useState('roundtrip');
  const [origin, setOrigin] = useState('New York (JFK)');
  const [destination, setDestination] = useState('Miami (MIA)');
  const [departDate, setDepartDate] = useState('2026-11-12');
  const [returnDate, setReturnDate] = useState('2026-11-19');
  const [passengers, setPassengers] = useState('1 Traveler, Economy');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(null);
  const [showSeoMore, setShowSeoMore] = useState(false);
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

  const handleBookDeal = (deal) => {
    setSelectedFlightQuote({
      origin: deal.origin,
      destination: `${deal.city} (${deal.code})`,
      dates: 'Flexible Dates Available',
      passengers: '1 Traveler, Economy',
      price: `$${deal.price}`,
      airline: deal.airline
    });
    setSearchModalOpen(true);
  };

  const filteredDeals = activeCategory === 'all'
    ? FLIGHT_DEALS
    : FLIGHT_DEALS.filter((d) => d.category === activeCategory);

  return (
    <>
      {/* HERO & SEARCH ENGINE SECTION */}
      <section className="hero-section" id="search">
        <div className="hero-backdrop-glow"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-pill-badge">
              <span className="dot"></span>
              <span>Exclusive Unpublished Flight Deals • Verified Savings</span>
            </div>
            <h1 className="hero-title">
              Fly Smart, Save Big with <span className="highlight-teal">TraveloHook's</span> Exclusive Flight Deals
            </h1>
            <p className="hero-subtitle">
              Find massive savings across 500+ global airlines. Compare real-time schedules, access private airline consolidation fares, and book with confidence backed by our 24/7 concierge support.
            </p>
          </div>

          {/* FLIGHT SEARCH ENGINE WIDGET */}
          <FlightSearchWidget />
        </div>
      </section>

      {/* 4 VALUE PROPOSITION / TRUST CARDS */}
      <section className="trust-cards-section">
        <div className="container">
          <div className="trust-cards-grid">
            <div className="trust-card">
              <div className="trust-card-icon-wrap">
                <ShieldCheck size={24} />
              </div>
              <h3 className="trust-card-title">Assured Quality</h3>
              <p className="trust-card-desc">
                We ensure every detail of your journey is handled with care. Verified airline ticket bookings, direct confirmation codes, and reliable travel updates.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-card-icon-wrap">
                <Tag size={24} />
              </div>
              <h3 className="trust-card-title">Low Fare Promise</h3>
              <p className="trust-card-desc">
                If you find a lower price on the same itinerary within 24 hours, our Best Price Guarantee will match the difference or credit your fare.
              </p>
            </div>

            <div className="trust-card">
              <div className="trust-card-icon-wrap">
                <Lock size={24} />
              </div>
              <h3 className="trust-card-title">Easy & Secure</h3>
              <p className="trust-card-desc">
                With bank-grade 256-Bit SSL encrypted payments, PCI-DSS compliance, and straightforward cancellation options, your booking is 100% protected.
              </p>
            </div>

            <div className="trust-card highlight-support">
              <div className="trust-card-icon-wrap">
                <Headphones size={24} />
              </div>
              <h3 className="trust-card-title">24/7 VIP Support</h3>
              <p className="trust-card-desc">
                Our certified flight agents are ready to assist you right now. Need immediate flight changes or unpublished phone fares?
              </p>
              <a href="tel:+18446720280" className="btn-card-call">
                <PhoneCall size={16} /> CALL 1-844-672-0280
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FLIGHT DEALS */}
      <section className="deals-section" id="deals">
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Sparkles size={14} /> Handpicked Flight Bargains
            </div>
            <h2 className="section-main-title">
              Exclusive <span>Flight Deals</span> to Top Destinations
            </h2>
            <p className="section-sub-desc">
              Kickstart your next adventure with our discounted flight deals. Available on direct and primary connecting routes with top-tier airlines.
            </p>
          </div>

          <div className="deals-filter-bar">
            <button
              className={`deals-filter-chip ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Top Deals
            </button>
            <button
              className={`deals-filter-chip ${activeCategory === 'east' ? 'active' : ''}`}
              onClick={() => setActiveCategory('east')}
            >
              East Coast & Midwest
            </button>
            <button
              className={`deals-filter-chip ${activeCategory === 'west' ? 'active' : ''}`}
              onClick={() => setActiveCategory('west')}
            >
              West Coast & Pacific
            </button>
            <button
              className={`deals-filter-chip ${activeCategory === 'beach' ? 'active' : ''}`}
              onClick={() => setActiveCategory('beach')}
            >
              Beaches & Sunshine
            </button>
          </div>

          <div className="deals-cards-grid">
            {filteredDeals.map((deal) => (
              <div key={deal.id} className="flight-deal-card">
                <div className="card-image-box">
                  <img src={deal.image} alt={deal.city} loading="lazy" />
                  <span className="card-top-tag">{deal.tag}</span>
                  <span className="card-deal-discount">SAVE {Math.round(((deal.originalPrice - deal.price) / deal.originalPrice) * 100)}%</span>
                </div>
                <div className="card-body-content">
                  <div className="card-route-header">
                    <Link to={deal.link} style={{ color: 'inherit' }}>
                      <h3 className="card-city-name">{deal.city}</h3>
                    </Link>
                    <span className="card-route-codes">{deal.code}</span>
                  </div>
                  <div className="card-travel-specs">
                    <span>From {deal.origin}</span>
                    <span>•</span>
                    <span>{deal.type}</span>
                  </div>

                  <div className="card-price-row">
                    <div className="price-meta-wrap">
                      <span className="price-label-text">Starting from</span>
                      <div className="price-actual-wrap">
                        <span className="price-original">${deal.originalPrice}</span>
                        <span className="price-discounted">${deal.price}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn-card-book"
                      onClick={() => handleBookDeal(deal)}
                    >
                      <span>Book Deal</span>
                      <Plane size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPOTLIGHT BANNERS (Cheap Flights to USA) */}
      <section className="spotlight-section" id="spotlight">
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Compass size={14} /> Limited-Time Flight Specials
            </div>
            <h2 className="section-main-title">
              Cheap Flights to <span>USA Hubs</span>
            </h2>
            <p className="section-sub-desc">
              Maximum flight deals to top metropolitan hot-spots with flexible date changes and 24/7 personalized travel desk support.
            </p>
          </div>

          <div className="spotlight-grid">
            {SPOTLIGHT_DEALS.map((spot) => (
              <div key={spot.id} className="spotlight-card">
                <img src={spot.image} alt={spot.title} className="spotlight-card-bg" />
                <div className="spotlight-overlay"></div>
                <div className="spotlight-top-badge">{spot.discount}</div>
                <div className="spotlight-bottom-info">
                  <Link to={spot.link} style={{ color: '#fff' }}>
                    <h3 className="spotlight-city-title">{spot.title}</h3>
                  </Link>
                  <p className="spotlight-subtext">{spot.desc} • From {spot.price}</p>
                  <a href="tel:+18446720280" className="spotlight-call-box">
                    <span className="spotlight-call-number">
                      <PhoneCall size={14} /> 1-844-672-0280
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Call to Lock Fare →</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TRAVELOHOOK & SEO */}
      <section className="why-us-section" id="why-us">
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Award size={14} /> Why TraveloHook
            </div>
            <h2 className="section-main-title">
              Online Flight Booking Has Never Been <span>Easier</span>
            </h2>
            <p className="section-sub-desc">
              Discover why over 1.2 million smart flyers trust TraveloHook for their domestic and international airline reservations.
            </p>
          </div>

          <div className="why-features-grid">
            <div className="why-feature-box">
              <div className="why-feature-icon">
                <Globe size={26} />
              </div>
              <h3 className="why-feature-title">Extensive Airline Coverage</h3>
              <p className="why-feature-desc">
                We partner with 500+ global carriers including Delta, American, United, Southwest, and British Airways to bring you every available route.
              </p>
            </div>

            <div className="why-feature-box">
              <div className="why-feature-icon">
                <Tag size={26} />
              </div>
              <h3 className="why-feature-title">Unpublished Offline Fares</h3>
              <p className="why-feature-desc">
                Our smart pricing algorithm combined with our direct consolidator desk unlocks unpublished telephone rates with savings up to 40%.
              </p>
            </div>

            <div className="why-feature-box">
              <div className="why-feature-icon">
                <Headphones size={26} />
              </div>
              <h3 className="why-feature-title">24/7 Human Concierge</h3>
              <p className="why-feature-desc">
                Skip automated phone trees. Connect with an experienced travel consultant in under 30 seconds for quick changes, cancellations, or seat upgrades.
              </p>
            </div>

            <div className="why-feature-box">
              <div className="why-feature-icon">
                <CreditCard size={26} />
              </div>
              <h3 className="why-feature-title">Fast & Easy Booking</h3>
              <p className="why-feature-desc">
                Simple 3-step checkout, bank-grade encryption, and immediate e-ticket delivery directly to your inbox with zero surprise processing fees.
              </p>
            </div>
          </div>

          {/* SEO Content Box */}
          <div className="seo-article-card">
            <h3 className="seo-article-title">Book Cheap Flights & Airline Tickets with TraveloHook</h3>
            <p className="seo-article-p">
              Looking for cheap flights on the best plane to buy airline tickets and save big on your upcoming trip? TraveloHook provides travelers with an intuitive search engine designed to scan hundreds of airlines in seconds, matching your schedule with the lowest fares available. Whether you are traveling for business, planning a family vacation, or embarking on a spontaneous weekend getaway, our platform gives you the freedom to compare itineraries, select your preferred cabin class, and book with complete peace of mind.
            </p>

            {showSeoMore && (
              <div className="animate-fade-in">
                <p className="seo-article-p">
                  <strong>The TraveloHook Advantage:</strong> While automated online algorithms are fantastic for general booking, airline pricing models constantly change based on supply, seat inventory, and fuel surcharges. Our travel agents have direct contracts with major global airline consolidators. By dialing our toll-free phone number <strong>+1-844-672-0280</strong>, you gain access to private bulk fares and promotional discount codes that are legally prohibited from being advertised on public booking sites.
                </p>
                <p className="seo-article-p">
                  <strong>Flexible Booking & 24-Hour Cancellation:</strong> We understand plans can change without warning. That is why TraveloHook offers flexible rebooking policies and 24-hour risk-free cancellation windows on eligible flights. From seat assignments to special baggage requests and multi-city routing, our dedicated travel experts handle all the heavy lifting so you can focus entirely on enjoying your trip.
                </p>
              </div>
            )}

            <button
              type="button"
              className="seo-toggle-btn"
              onClick={() => setShowSeoMore(!showSeoMore)}
            >
              <span>{showSeoMore ? 'Show Less' : 'Read More About Flight Booking'}</span>
              {showSeoMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </section>

      {/* AIRLINES PARTNER STRIP */}
      <section className="airlines-strip-section">
        <div className="container airlines-strip-wrapper">
          <div className="airline-badge-chip">✈ Delta Air Lines</div>
          <div className="airline-badge-chip">✈ American Airlines</div>
          <div className="airline-badge-chip">✈ United Airlines</div>
          <div className="airline-badge-chip">✈ Southwest Airlines</div>
          <div className="airline-badge-chip">✈ British Airways</div>
          <div className="airline-badge-chip">✈ Emirates</div>
          <div className="airline-badge-chip">✈ Lufthansa</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Star size={14} /> Customer Experiences
            </div>
            <h2 className="section-main-title">
              What Smart Travelers Say About <span>TraveloHook</span>
            </h2>
            <p className="section-sub-desc">
              Rated 4.9/5 stars across 45,000+ verified customer booking reviews.
            </p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">
                "I called their 800 number after seeing a flight to Miami. The agent found me an unpublished non-stop return flight for $70 less than Expedia! Ticket arrived within 10 minutes."
              </p>
              <div className="review-author-wrap">
                <div className="review-avatar">JD</div>
                <div>
                  <div className="review-name">Jason D.</div>
                  <div className="review-sub">Verified Traveler • New York, NY</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">
                "Super easy website to navigate and booking our family trip to Orlando was totally painless. Great customer service when I needed to update our seat selection."
              </p>
              <div className="review-author-wrap">
                <div className="review-avatar">MR</div>
                <div>
                  <div className="review-name">Melissa R.</div>
                  <div className="review-sub">Verified Traveler • Chicago, IL</div>
                </div>
              </div>
            </div>

            <div className="review-card">
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-text">
                "TraveloHook saved our vacation. Our original airline canceled due to weather, and TraveloHook’s phone team rebooked us on another carrier within 25 minutes. Lifesavers!"
              </p>
              <div className="review-author-wrap">
                <div className="review-avatar">KT</div>
                <div>
                  <div className="review-name">Kevin T.</div>
                  <div className="review-sub">Verified Traveler • Los Angeles, CA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Headphones size={14} /> Got Questions?
            </div>
            <h2 className="section-main-title">
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="section-sub-desc">
              Everything you need to know about booking, phone discounts, baggage rules, and ticket modifications.
            </p>
          </div>

          <div className="faq-accordion-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item-card ${isOpen ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon-indicator">
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-drawer animate-fade-in">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHONE PROMO BANNER */}
      <section className="phone-promo-banner-section">
        <div className="container">
          <div className="phone-promo-box">
            <div className="phone-promo-left">
              <div className="promo-call-icon">
                <PhoneCall size={32} />
              </div>
              <div>
                <h3 className="promo-call-title">
                  Can't Find Your Ideal Fare? <span>Call For Secret Deals!</span>
                </h3>
                <p className="promo-call-desc">
                  Our licensed travel consultants have access to unpublished airline consolidator rates not listed online.
                </p>
              </div>
            </div>

            <div className="phone-promo-right">
              <a href="tel:+18446720280" className="btn-urgent-call">
                <PhoneCall size={20} />
                <span>+1-844-672-0280</span>
              </a>
            </div>
          </div>
        </div>
      </section>

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
