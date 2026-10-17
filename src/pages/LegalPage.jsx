import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowRight, PhoneCall, Mail, Clock } from 'lucide-react';
import { LEGAL_POLICIES_DATA } from '../data/legalPoliciesData';

const ALL_POLICIES_NAV = [
  { slug: 'privacy-policy', label: 'Privacy Policy' },
  { slug: 'terms-and-conditions', label: 'Terms & Conditions' },
  { slug: 'refund-policy', label: 'Refund Policy' },
  { slug: 'cancellation-policy', label: 'Cancellation Policy' },
  { slug: 'cookie-policy', label: 'Cookie Policy' },
  { slug: 'taxes-and-fees', label: 'Taxes & Fees' },
  { slug: 'advertiser-policy', label: 'Advertiser Policy' },
  { slug: 'ccpa', label: 'CCPA Compliance' },
  { slug: 'gdpr', label: 'GDPR Compliance' }
];

export default function LegalPage({ slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params.slug || 'privacy-policy';
  const policy = LEGAL_POLICIES_DATA[slug] || LEGAL_POLICIES_DATA['privacy-policy'];

  return (
    <div className="legal-policy-page" style={{ padding: '50px 0 80px 0', background: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-badge-pill">
            <ShieldCheck size={14} /> Legal & Regulatory Compliance
          </div>
          <h1 className="section-main-title" style={{ fontSize: '38px', marginBottom: '8px' }}>
            {policy.title}
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px' }}>
            Effective & Last Updated: <strong>{policy.lastUpdated}</strong> • TraveloHook Legal Department
          </p>
        </div>

        {/* Content Layout with Left Sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '36px', alignItems: 'start' }}>
          {/* Left Navigation Sidebar */}
          <aside style={{ background: '#fff', border: '1.5px solid #e2e8f0', borderRadius: '16px', padding: '20px', position: 'sticky', top: '90px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
              All Legal Policies
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {ALL_POLICIES_NAV.map((item) => {
                const isActive = item.slug === slug;
                return (
                  <li key={item.slug}>
                    <Link
                      to={`/${item.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        fontSize: '13.5px',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#1E5E59' : '#475569',
                        background: isActive ? '#eef7f6' : 'transparent',
                        border: isActive ? '1px solid #a6dad6' : '1px solid transparent',
                        transition: 'all 0.2s'
                      }}
                    >
                      <span>{item.label}</span>
                      {isActive && <ArrowRight size={14} />}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px dashed #e2e8f0' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
                Legal Assistance
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '12px' }}>
                Have questions regarding our policies or your booking rights?
              </p>
              <a href="tel:+18446720280" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', fontWeight: 800, color: '#287A74' }}>
                <PhoneCall size={14} /> +1-844-672-0280
              </a>
            </div>
          </aside>

          {/* Right Document Content */}
          <main style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 14px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '20px', marginBottom: '28px', borderBottom: '1px solid #f1f5f9' }}>
              <FileText size={24} color="#287A74" />
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 800, color: '#0f172a' }}>
                  {policy.title}
                </h2>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Applies to all visitors and airline reservations made via TraveloHook.com</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {policy.sections.map((sec, index) => (
                <section key={index} style={{ borderBottom: index === policy.sections.length - 1 ? 'none' : '1px solid #f8fafc', paddingBottom: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    {sec.heading}
                  </h3>
                  <div style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                    {sec.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Assistance Card */}
            <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '24px', marginTop: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Need More Clarification?
                </h4>
                <p style={{ fontSize: '13.5px', color: '#64748b' }}>
                  Contact our compliance and travel advisory desk for quick guidance.
                </p>
              </div>
              <a href="tel:+18446720280" className="btn-urgent-call" style={{ padding: '10px 20px', fontSize: '14px' }}>
                <PhoneCall size={16} /> 1-844-672-0280
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
