import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Award, ShieldCheck, Users, Headphones, Clock, Globe, CheckCircle2, PhoneCall } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="about-us-page" style={{ padding: '50px 0 80px 0' }}>
      <div className="container">
        {/* Hero Section */}
        <div className="section-head-wrap" style={{ maxWidth: '850px' }}>
          <div className="section-badge-pill">
            <Award size={14} /> About TraveloHook
          </div>
          <h1 className="section-main-title">
            Redefining Airline Travel with <span>Smart Technology & Human Care</span>
          </h1>
          <p className="section-sub-desc">
            At TraveloHook, we believe booking flights should be transparent, effortless, and affordable. We combine cutting-edge fare search algorithms with round-the-clock licensed travel specialists to ensure you never overpay for your tickets.
          </p>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', margin: '40px 0 60px 0' }}>
          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 800, color: '#287A74' }}>1.2M+</div>
            <div style={{ color: '#475569', fontSize: '14px', fontWeight: 600 }}>Happy Travelers Served</div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 800, color: '#287A74' }}>500+</div>
            <div style={{ color: '#475569', fontSize: '14px', fontWeight: 600 }}>Global Airline Partners</div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 800, color: '#287A74' }}>24/7</div>
            <div style={{ color: '#475569', fontSize: '14px', fontWeight: 600 }}>Live Concierge Support</div>
          </div>
          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '38px', fontWeight: 800, color: '#287A74' }}>4.9/5</div>
            <div style={{ color: '#475569', fontSize: '14px', fontWeight: 600 }}>Verified Customer Rating</div>
          </div>
        </div>

        {/* Mission & Story */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
              Our Story & Commitment
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '14px', fontSize: '15px' }}>
              Founded with the vision to eliminate hidden surcharges and frustrating automated customer service in online travel, TraveloHook has quickly grown into one of North America's fastest-growing independent flight reservation platforms.
            </p>
            <p style={{ color: '#475569', lineHeight: '1.7', marginBottom: '20px', fontSize: '15px' }}>
              Unlike generic search aggregators that simply redirect you to third parties, TraveloHook maintains direct contracts with premier airline consolidators, giving our customers access to unpublished bulk fares, discounted seat upgrades, and personalized itinerary management.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#287A74" /> Zero hidden booking or payment fees
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#287A74" /> Real human travel agents available 24/7/365
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="#287A74" /> 24-Hour risk-free flight cancellation on eligible fares
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img
              src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
              alt="Airplane Travel"
              style={{ width: '100%', height: '380px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Core Values Grid */}
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '32px' }}>
          The TraveloHook Core Values
        </h2>

        <div className="why-features-grid">
          <div className="why-feature-box">
            <div className="why-feature-icon">
              <ShieldCheck size={26} />
            </div>
            <h3 className="why-feature-title">Integrity & Transparency</h3>
            <p className="why-feature-desc">
              What you see is what you pay. We display full government taxes and airline fees upfront before payment.
            </p>
          </div>

          <div className="why-features-grid-item why-feature-box">
            <div className="why-feature-icon">
              <Headphones size={26} />
            </div>
            <h3 className="why-feature-title">Human-Centered Care</h3>
            <p className="why-feature-desc">
              When weather strikes or schedules change, our dedicated agents answer within 30 seconds to assist you immediately.
            </p>
          </div>

          <div className="why-features-grid-item why-feature-box">
            <div className="why-feature-icon">
              <Award size={26} />
            </div>
            <h3 className="why-feature-title">Best Price Guarantee</h3>
            <p className="why-feature-desc">
              We proactively scan for fare drops and price match qualifying identical itineraries found within 24 hours.
            </p>
          </div>

          <div className="why-features-grid-item why-feature-box">
            <div className="why-feature-icon">
              <Globe size={26} />
            </div>
            <h3 className="why-feature-title">Global Connectivity</h3>
            <p className="why-feature-desc">
              From domestic hops across the US to transcontinental multi-city adventures, we connect you to every corner of the world.
            </p>
          </div>
        </div>

        {/* CTA Contact Desk */}
        <div className="phone-promo-box" style={{ marginTop: '50px' }}>
          <div className="phone-promo-left">
            <div className="promo-call-icon">
              <PhoneCall size={30} />
            </div>
            <div>
              <h3 className="promo-call-title">Have Questions About Your Travel Plans?</h3>
              <p className="promo-call-desc">Our travel advisors are ready to plan your perfect itinerary today.</p>
            </div>
          </div>
          <a href="tel:+18446720280" className="btn-urgent-call">
            <PhoneCall size={18} /> +1-844-672-0280
          </a>
        </div>
      </div>
    </div>
  );
}
