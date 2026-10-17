import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Plane,
  PhoneCall,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Compass
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/destinationsData';
import FlightSearchWidget from '../components/FlightSearchWidget';

export default function DestinationPage({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params.slug || 'new-york';
  const destination = DESTINATIONS_DATA[slug] || DESTINATIONS_DATA['new-york'];

  const [origin, setOrigin] = useState('All Major Airports');
  const [departDate, setDepartDate] = useState('2026-11-15');

  return (
    <div className="destination-page">
      {/* Hero Banner with City Backdrop */}
      <section
        style={{
          position: 'relative',
          minHeight: '440px',
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.85) 100%), url(${destination.heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 700,
                marginBottom: '16px'
              }}
            >
              <Compass size={14} color="#48b8b0" /> {destination.airportName} ({destination.code})
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '48px',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '14px'
              }}
            >
              Cheap Flights to <span style={{ color: '#48b8b0' }}>{destination.name}</span>
            </h1>

            <p style={{ fontSize: '17px', color: '#e2e8f0', lineHeight: '1.6', marginBottom: '24px' }}>
              {destination.description}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div
                style={{
                  background: 'rgba(40, 122, 116, 0.9)',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '18px'
                }}
              >
                Fares from ${destination.startingPrice} <span style={{ fontSize: '13px', fontWeight: 500, textDecoration: 'line-through', opacity: 0.8 }}>${destination.originalPrice}</span>
              </div>

              <a href="tel:+18446720280" className="btn-urgent-call" style={{ padding: '12px 24px' }}>
                <PhoneCall size={18} /> Call +1-844-672-0280 For Secret Fares
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Search Widget for this Destination */}
      <section style={{ transform: 'translateY(-30px)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <FlightSearchWidget defaultDestination={`${destination.name} (${destination.code.split('/')[0].trim()})`} />
        </div>
      </section>

      {/* Popular Routes to this City */}
      <section style={{ padding: '40px 0 60px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-head-wrap">
            <div className="section-badge-pill">
              <Sparkles size={14} /> Low Fare Deals
            </div>
            <h2 className="section-main-title">
              Top Routes Flying to <span>{destination.name}</span>
            </h2>
            <p className="section-sub-desc">
              Compare round-trip and one-way ticket pricing on certified airline carriers. Call our desk for unpublished group & consolidator discounts.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
            {destination.routes.map((route, idx) => (
              <div
                key={idx}
                style={{
                  background: '#fff',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '22px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s'
                }}
              >
                <div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#287A74', textTransform: 'uppercase', marginBottom: '4px' }}>
                    {route.airline} • {route.duration}
                  </div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#0f172a' }}>
                    {route.from} → {destination.name} ({destination.code})
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
                    Non-stop & 1-stop schedules available
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase' }}>From</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800, color: '#1E5E59' }}>
                    ${route.price}
                  </div>
                  <a
                    href="tel:+18446720280"
                    className="btn-card-book"
                    style={{ marginTop: '6px', display: 'inline-flex', padding: '6px 14px' }}
                  >
                    <PhoneCall size={13} /> Book Fare
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* City Highlights & Travel Tips */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '32px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '36px' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                Must-See Attractions in {destination.name}
              </h3>
              <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '18px' }}>
                Whether you're visiting {destination.name} for business or leisure, don't miss these top-rated sights:
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {destination.attractions.map((attr, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#1e293b', fontWeight: 600 }}>
                    <CheckCircle2 size={18} color="#287A74" /> {attr}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#eef7f6', border: '1px solid #a6dad6', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <Calendar size={20} color="#287A74" />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                  Best Time to Visit
                </h4>
              </div>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                {destination.bestTimeToVisit}
              </p>

              <div style={{ borderTop: '1px dashed #a6dad6', paddingTop: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#1E5E59', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Need Booking Advice?
                </div>
                <p style={{ fontSize: '13.5px', color: '#475569', marginBottom: '14px' }}>
                  Speak directly with a specialist who knows {destination.name} airport terminals and airline baggage policies inside out.
                </p>
                <a href="tel:+18446720280" className="btn-urgent-call" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>
                  <PhoneCall size={16} /> Call +1-844-672-0280
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
