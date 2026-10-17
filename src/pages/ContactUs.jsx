import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, Headphones, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingId: '',
    subject: 'Booking Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" style={{ padding: '50px 0 80px 0' }}>
      <div className="container">
        {/* Header */}
        <div className="section-head-wrap" style={{ maxWidth: '800px' }}>
          <div className="section-badge-pill">
            <Headphones size={14} /> 24/7 Dedicated Support
          </div>
          <h1 className="section-main-title">
            We're Here to <span>Help You 24/7</span>
          </h1>
          <p className="section-sub-desc">
            Whether you need urgent help with a flight rebooking, want to unlock offline consolidator discounts, or have questions about your itinerary, our team is always ready.
          </p>
        </div>

        {/* Contact Methods Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', margin: '40px 0 50px 0' }}>
          <div style={{ background: '#fff', border: '1.5px solid #a6dad6', borderRadius: '16px', padding: '28px', textAlign: 'center', boxShadow: '0 4px 14px rgba(40,122,116,0.06)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#eef7f6', color: '#287A74', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <PhoneCall size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Call Our Flight Desk
            </h3>
            <p style={{ color: '#64748b', fontSize: '13.5px', marginBottom: '14px' }}>
              Immediate assistance for new bookings & changes. Average wait time under 20s.
            </p>
            <a href="tel:+18446720280" style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#287A74' }}>
              +1-844-672-0280
            </a>
            <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: 700, marginTop: '6px' }}>● Toll-Free & Available Now</div>
          </div>

          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#eef7f6', color: '#287A74', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <Mail size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Email Support
            </h3>
            <p style={{ color: '#64748b', fontSize: '13.5px', marginBottom: '14px' }}>
              For general inquiries, refunds, and ticket receipts. Response within 2 hours.
            </p>
            <a href="mailto:support@travelohook.com" style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
              support@travelohook.com
            </a>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>bookings@travelohook.com</div>
          </div>

          <div style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#eef7f6', color: '#287A74', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
              <Clock size={26} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Operating Hours
            </h3>
            <p style={{ color: '#64748b', fontSize: '13.5px', marginBottom: '14px' }}>
              Our airline ticketing agents work around the clock 365 days a year.
            </p>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
              24 Hours / 7 Days a Week
            </div>
            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '6px' }}>Including National Holidays</div>
          </div>
        </div>

        {/* Contact Form and Details */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '36px' }}>
          {/* Form */}
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '36px', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Send Us a Message
            </h2>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
              Fill in your details below and an airline ticketing specialist will get back to you shortly.
            </p>

            {submitted ? (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <CheckCircle2 size={42} color="#16a34a" style={{ margin: '0 auto 12px auto' }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#166534', marginBottom: '8px' }}>
                  Inquiry Received Successfully!
                </h3>
                <p style={{ color: '#166534', fontSize: '14px' }}>
                  Thank you for contacting TraveloHook. One of our flight specialists has received your request and will contact you via email or phone shortly.
                </p>
                <button
                  type="button"
                  className="btn-card-book"
                  style={{ margin: '20px auto 0 auto' }}
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                      Booking Reference / PNR (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. TH-982314"
                      value={formData.bookingId}
                      onChange={(e) => setFormData({ ...formData, bookingId: e.target.value })}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                    Topic / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px', background: '#fff' }}
                  >
                    <option value="Booking Inquiry">New Flight Booking Inquiry</option>
                    <option value="Phone Discounts">Unpublished Phone Discounts</option>
                    <option value="Change / Cancellation">Flight Change or Cancellation</option>
                    <option value="Baggage & Seats">Seat Assignment or Baggage Query</option>
                    <option value="Refund Status">Refund Status Request</option>
                    <option value="Other">Other Travel Assistance</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#475569', marginBottom: '6px' }}>
                    Your Message / Travel Request *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your flight details, travel dates, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '14px', fontFamily: 'inherit' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn-search-flights" style={{ width: '100%', height: '52px' }}>
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick FAQ info & Urgent Callout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ background: '#eef7f6', border: '1.5px solid #a6dad6', borderRadius: '20px', padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <PhoneCall size={22} color="#287A74" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>
                  Need Immediate Help?
                </h3>
              </div>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '16px' }}>
                If your flight departs within 24 hours or you need urgent cancellation assistance, please do not wait for an email reply. Call our live emergency desk right now.
              </p>
              <a href="tel:+18446720280" className="btn-urgent-call" style={{ width: '100%', justifyContent: 'center' }}>
                <PhoneCall size={18} /> Call 1-844-672-0280
              </a>
            </div>

            <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '17px', fontWeight: 800, color: '#0f172a', marginBottom: '14px' }}>
                Common Inquiries We Resolve:
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#475569' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#287A74" /> 24-Hour Risk-Free cancellations
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#287A74" /> Adding infant or pet in cabin
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#287A74" /> Group flight discounts (9+ passengers)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldCheck size={16} color="#287A74" /> Rebooking canceled airline flights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
