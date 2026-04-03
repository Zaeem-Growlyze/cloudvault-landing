import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudVault — Secure Cloud Storage for Small Businesses</title>
      </Head>

      {/* ============================================================
          NAV
      ============================================================ */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              <div className="nav-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    fill="white"/>
                </svg>
              </div>
              CloudVault
            </a>

            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>

            <div className="nav-cta">
              <a href="#" className="nav-signin">Sign in</a>
              <a href="#trial" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.90rem' }}>
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-inner">
            {/* Left column */}
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot"></span>
                HIPAA Compliant &amp; SOC 2 Certified
              </div>

              <h1>
                Secure Cloud Storage Your<br />
                <span>Small Business</span><br />
                Actually Deserves
              </h1>

              <p className="hero-sub">
                Military-grade encryption, one-click HIPAA compliance, and unlimited team
                sharing — at a price that won&apos;t eat your budget. Built for accounting,
                legal, and healthcare teams that need to stay protected.
              </p>

              <div className="hero-cta">
                <a href="#trial" className="btn-primary">
                  Start Free 14-Day Trial
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="#how-it-works" className="btn-outline">See How It Works</a>
              </div>

              <p className="hero-note">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                No credit card required. Cancel anytime.
              </p>

              <div className="hero-trust">
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">✓</span>
                  End-to-end encrypted
                </div>
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">✓</span>
                  HIPAA ready
                </div>
                <div className="hero-trust-item">
                  <span className="hero-trust-icon">✓</span>
                  99.9% uptime SLA
                </div>
              </div>
            </div>

            {/* Right column — illustration card */}
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-icon">🔒</div>
                  <div>
                    <div className="hero-card-title">Miller &amp; Associates</div>
                    <div className="hero-card-sub">Encrypted Workspace · 3 users online</div>
                  </div>
                </div>

                <div className="hero-file-list">
                  {[
                    { icon: '📄', name: 'Q1-Audit-Report.pdf', size: '4.2 MB' },
                    { icon: '📊', name: 'Client-Financials-2024.xlsx', size: '1.8 MB' },
                    { icon: '📋', name: 'HIPAA-Compliance-Log.docx', size: '892 KB' },
                    { icon: '🖼️', name: 'Contract-Scan-March.jpg', size: '3.1 MB' },
                  ].map((f) => (
                    <div className="hero-file" key={f.name}>
                      <div className="hero-file-left">
                        <span className="hero-file-icon">{f.icon}</span>
                        <div>
                          <div className="hero-file-name">{f.name}</div>
                          <div className="hero-file-size">{f.size}</div>
                        </div>
                      </div>
                      <span className="hero-file-badge">Encrypted</span>
                    </div>
                  ))}
                </div>

                <div className="hero-card-footer">
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-val">256-bit</div>
                    <div className="hero-card-stat-label">AES Encryption</div>
                  </div>
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-val">99.9%</div>
                    <div className="hero-card-stat-label">Uptime SLA</div>
                  </div>
                  <div className="hero-card-stat">
                    <div className="hero-card-stat-val">0</div>
                    <div className="hero-card-stat-label">Breaches Ever</div>
                  </div>
                </div>
              </div>

              <div className="hero-float-badge">
                <span className="hero-float-icon">🛡️</span>
                <div>
                  <div className="hero-float-text">HIPAA Audit Log</div>
                  <div className="hero-float-sub">Auto-generated · Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SOCIAL PROOF BAR
      ============================================================ */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-bar-inner">
            <div className="proof-item">
              <span className="proof-item-icon">🏢</span>
              Trusted by 500+ small businesses across North America
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <span className="proof-item-icon">⭐</span>
              4.8/5 stars on G2
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <span className="proof-item-icon">🔒</span>
              Zero data breaches since founding
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <span className="proof-item-icon">⚡</span>
              10x cheaper than Box or Dropbox Business
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          FEATURES
      ============================================================ */}
      <section className="features" id="features">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why CloudVault</span>
            <h2 className="section-title">Everything your team needs. Nothing you don&apos;t.</h2>
            <p className="section-subtitle">
              Purpose-built for small businesses in compliance-heavy industries. No bloated
              enterprise overhead. No surprise fees.
            </p>
          </div>

          <div className="features-grid">
            {[
              {
                icon: '🔐', color: 'blue',
                title: 'Your Keys. Your Data. Always.',
                desc: 'End-to-end encryption means only you and your team can ever read your files. Not us, not a hacker, not a subpoena. Zero-knowledge architecture by design.',
              },
              {
                icon: '✅', color: 'green',
                title: 'One-Click HIPAA Compliance',
                desc: 'Built-in audit logs, data residency controls, and Business Associate Agreements included on every plan. Pass your next audit without the panic.',
              },
              {
                icon: '👥', color: 'orange',
                title: 'Unlimited Team Sharing',
                desc: 'Share folders with granular permissions — view only, comment, edit, or full admin. Add your entire team on Professional without paying per seat.',
              },
              {
                icon: '🔄', color: 'blue',
                title: 'Automatic Daily Backups',
                desc: 'Every file is backed up automatically every 24 hours with a 90-day version history. Accidentally delete something? Restore it in two clicks.',
              },
              {
                icon: '⚡', color: 'green',
                title: '99.9% Uptime SLA',
                desc: 'Your documents need to be there when you need them. Our globally distributed infrastructure guarantees near-perfect availability — in writing.',
              },
              {
                icon: '💰', color: 'orange',
                title: '10x Cheaper Than the Rest',
                desc: 'Box Business starts at $15/user/month. Dropbox Business at $20/user/month. CloudVault Professional is $79/month for your entire team — unlimited users.',
              },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW IT WORKS
      ============================================================ */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Up and running in under 10 minutes</h2>
            <p className="section-subtitle">
              No IT department required. No complex setup. Just sign up and your team
              is storing and sharing securely within minutes.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <span className="step-illustration">📝</span>
              <h3>Create Your Workspace</h3>
              <p>
                Sign up in 60 seconds. Name your workspace and invite your team by email.
                Choose your data residency region to meet compliance requirements from day one.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <span className="step-illustration">📂</span>
              <h3>Upload &amp; Organize</h3>
              <p>
                Drag and drop files or sync your existing folders automatically. CloudVault
                encrypts every file at upload and organizes it exactly the way you set it up.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <span className="step-illustration">🤝</span>
              <h3>Share Securely</h3>
              <p>
                Set granular permissions for each folder or file. Share with your team, clients,
                or auditors with a secure link — and revoke access any time with one click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECURITY & COMPLIANCE
      ============================================================ */}
      <section className="compliance" id="security">
        <div className="container">
          <div className="compliance-inner">
            <div>
              <span className="section-label">Security &amp; Compliance</span>
              <h2 className="section-title">Enterprise-grade protection at small business prices</h2>
              <p className="section-subtitle">
                We built CloudVault from the ground up for regulated industries. Every plan
                includes the compliance infrastructure that used to cost tens of thousands a year.
              </p>

              <ul className="compliance-list">
                {[
                  'Automatic HIPAA audit logs generated for every file access, edit, and share event',
                  'SOC 2 Type II certified infrastructure with annual third-party penetration testing',
                  'AES-256 encryption at rest and TLS 1.3 in transit — the same standard used by the US military',
                  'Data residency controls: choose US, EU, or Canada to meet local regulations',
                  'Business Associate Agreements (BAA) included on all plans, ready to sign instantly',
                  'GDPR-ready with automated data deletion requests and processing records',
                ].map((item) => (
                  <li key={item}>
                    <span className="compliance-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="compliance-badges">
                {[
                  { icon: '🏥', name: 'HIPAA', sub: 'Compliant' },
                  { icon: '🔐', name: 'SOC 2', sub: 'Type II' },
                  { icon: '🇪🇺', name: 'GDPR', sub: 'Ready' },
                  { icon: '🛡️', name: 'AES-256', sub: 'Encryption' },
                  { icon: '📋', name: 'BAA', sub: 'Included' },
                  { icon: '🔒', name: 'TLS 1.3', sub: 'In Transit' },
                ].map((b) => (
                  <div className="compliance-badge" key={b.name}>
                    <span className="compliance-badge-icon">{b.icon}</span>
                    <div className="compliance-badge-name">{b.name}</div>
                    <div className="compliance-badge-sub">{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Real Results</span>
            <h2 className="section-title">Small businesses love CloudVault</h2>
            <p className="section-subtitle">
              500+ teams across accounting, legal, and healthcare use CloudVault every day.
              Here&apos;s what a few of them have to say.
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <span className="testimonial-verified">✓ Verified on G2</span>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="testimonial-quote">
                CloudVault cut our compliance costs in half and our team actually uses it
                daily. Best $99 per month we spend. The audit logs alone would have cost us
                $400 a month with our old setup.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar avatar-blue">SC</div>
                <div>
                  <div className="testimonial-name">Sarah Chen</div>
                  <div className="testimonial-role">Accountant, Miller &amp; Associates</div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <span className="testimonial-verified">✓ Verified on G2</span>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => <span key={i}>⭐</span>)}
              </div>
              <p className="testimonial-quote">
                Finally, a storage solution that doesn&apos;t treat small firms like second-class
                citizens. We compared five platforms. CloudVault was the only one that offered
                a BAA without an enterprise contract.
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar avatar-green">JR</div>
                <div>
                  <div className="testimonial-name">James Rodriguez</div>
                  <div className="testimonial-role">Managing Partner, Rodriguez Legal Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMPARISON TABLE
      ============================================================ */}
      <section className="comparison" id="compare">
        <div className="container">
          <div className="text-center">
            <span className="section-label">How We Compare</span>
            <h2 className="section-title">Why CloudVault wins for small businesses</h2>
            <p className="section-subtitle">
              We built the product that enterprise vendors refuse to build for smaller teams.
              Same security. A fraction of the cost.
            </p>
          </div>

          <div className="comparison-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight-col">CloudVault ✓</th>
                  <th>Box Business</th>
                  <th>Dropbox Business</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Starting price (team of 10)', '$79/mo flat', '$150/mo', '$200/mo'],
                  ['HIPAA compliance', true, '+ $$$', 'Enterprise only'],
                  ['BAA included on all plans', true, false, false],
                  ['End-to-end encryption', true, false, false],
                  ['Zero-knowledge architecture', true, false, false],
                  ['Built-in audit logs', true, true, 'Enterprise only'],
                  ['Data residency controls', true, 'Enterprise only', 'Enterprise only'],
                  ['Unlimited users', 'Pro + up', false, false],
                  ['SOC 2 Type II', true, true, true],
                  ['Free 14-day trial, no credit card', true, false, false],
                ].map(([feature, cv, box, db]) => (
                  <tr key={feature}>
                    <td>{feature}</td>
                    <td className="td-cv">
                      {cv === true ? <span className="td-check">✓</span>
                        : cv === false ? <span className="td-cross">✕</span>
                          : cv}
                    </td>
                    <td>
                      {box === true ? <span className="td-check">✓</span>
                        : box === false ? <span className="td-cross">✕</span>
                          : box}
                    </td>
                    <td>
                      {db === true ? <span className="td-check">✓</span>
                        : db === false ? <span className="td-cross">✕</span>
                          : db}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRICING
      ============================================================ */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Transparent pricing. No surprises.</h2>
            <p className="section-subtitle">
              All plans include end-to-end encryption, HIPAA compliance tools, and a BAA.
              Upgrade or cancel any time.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card">
              <div className="pricing-tier">Starter</div>
              <div className="pricing-price">
                <span className="price-amount">$29</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">For solo practitioners and very small teams just getting started.</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                {[
                  '1 TB encrypted storage',
                  'Up to 3 team members',
                  'HIPAA audit logs included',
                  'BAA included',
                  'Daily automatic backups',
                  'Email support',
                ].map((f) => (
                  <li key={f}>
                    <span className="pricing-feat-check">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#trial" className="btn-primary">Start Free Trial</a>
            </div>

            {/* Professional — featured */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-tier">Professional</div>
              <div className="pricing-price">
                <span className="price-amount">$79</span>
                <span className="price-period">/month</span>
              </div>
              <p className="pricing-desc">For growing teams that need unlimited users and serious compliance tools.</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                {[
                  '10 TB encrypted storage',
                  'Unlimited team members',
                  'Granular folder permissions',
                  'HIPAA + SOC 2 audit logs',
                  'Data residency controls',
                  'Priority chat &amp; email support',
                  '90-day version history',
                ].map((f) => (
                  <li key={f}>
                    <span className="pricing-feat-check">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <a href="#trial" className="btn-cta">Start Free Trial</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <div className="pricing-tier">Enterprise</div>
              <div className="pricing-price">
                <span className="price-amount" style={{ fontSize: '2rem' }}>Custom</span>
              </div>
              <p className="pricing-desc">For larger organisations with dedicated support and custom infrastructure needs.</p>
              <div className="pricing-divider"></div>
              <ul className="pricing-features">
                {[
                  'Unlimited storage',
                  'Unlimited team members',
                  'Dedicated account manager',
                  'Custom data residency',
                  'SSO &amp; SCIM provisioning',
                  'SLA-backed 24/7 phone support',
                  'Custom security review',
                ].map((f) => (
                  <li key={f}>
                    <span className="pricing-feat-check">✓</span>
                    <span dangerouslySetInnerHTML={{ __html: f }} />
                  </li>
                ))}
              </ul>
              <a href="#contact" className="pricing-enterprise-btn">Talk to Sales</a>
            </div>
          </div>

          <p className="pricing-note">
            All plans include a 14-day free trial. No credit card required to start.
            Annual plans save 20%.
          </p>
        </div>
      </section>

      {/* ============================================================
          FAQ
      ============================================================ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions we get a lot</h2>
            <p className="section-subtitle">
              Still not sure? These are the most common questions from teams in accounting,
              legal, and healthcare.
            </p>
          </div>

          <div className="faq-grid">
            {[
              {
                q: 'Is CloudVault truly HIPAA compliant?',
                a: 'Yes. CloudVault includes all the technical and administrative safeguards required by HIPAA, including automatic audit logs, access controls, encryption at rest and in transit, and a signed Business Associate Agreement (BAA) included on every plan at no extra cost.',
              },
              {
                q: 'What does "zero-knowledge encryption" mean?',
                a: 'It means we never have access to your encryption keys — and neither does anyone else. Your files are encrypted on your device before they reach our servers, so even if our infrastructure were somehow compromised, your data would remain completely unreadable.',
              },
              {
                q: 'How is CloudVault different from Dropbox or Box?',
                a: 'Dropbox and Box were built for large enterprises. HIPAA compliance, BAAs, and zero-knowledge encryption are either unavailable or cost thousands extra per year. CloudVault includes all of it on every plan, starting at $29/month.',
              },
              {
                q: 'What happens to my data if I cancel?',
                a: 'You own your data, full stop. When you cancel, you have 30 days to download everything. After that, your data is permanently and verifiably deleted from our servers. We provide a deletion certificate on request.',
              },
              {
                q: 'Can I migrate my existing files from Dropbox or Google Drive?',
                a: 'Yes. Our migration tool imports directly from Dropbox, Google Drive, Box, and OneDrive. Most teams complete their migration in under an hour with zero downtime.',
              },
              {
                q: 'Is there a limit on file size?',
                a: 'No. You can upload files of any size on all plans. There are no per-file size limits, which is especially useful for large CAD files, medical imaging, or video assets.',
              },
              {
                q: 'Do you offer a Business Associate Agreement (BAA)?',
                a: 'Yes, a signed BAA is included on every plan — including Starter. You do not need to upgrade to Enterprise or pay extra to get one. You can sign it instantly from your dashboard.',
              },
              {
                q: 'What kind of support do you offer?',
                a: 'Starter plans include email support with a 24-hour response time. Professional plans include priority chat and email support. Enterprise plans include a dedicated account manager and 24/7 phone support.',
              },
            ].map((item) => (
              <div className="faq-item" key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA BANNER
      ============================================================ */}
      <section className="cta-banner" id="trial">
        <div className="container">
          <h2>Your files deserve better protection.<br />Start in 60 seconds.</h2>
          <p>
            Join 500+ small businesses who stopped overpaying for enterprise storage
            and started sleeping easier at night.
          </p>
          <a href="#" className="btn-accent">
            Start Your Free 14-Day Trial
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p className="cta-sub-note">No credit card required. Cancel anytime. Setup in under 10 minutes.</p>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: 28, height: 28, background: '#0066CC', borderRadius: 6, marginRight: 8
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" fill="white"/>
                  </svg>
                </span>
                CloudVault
              </h3>
              <p>
                Encrypted cloud storage built for small businesses in accounting, legal,
                and healthcare. HIPAA compliant from day one.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#compare">Compare</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">BAA Template</a></li>
                <li><a href="#">Security Overview</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CloudVault Inc. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
