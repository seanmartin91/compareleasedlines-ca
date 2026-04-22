// frontend/src/pages/index.tsx
import { useState } from 'react';
import Head from 'next/head';
import QuoteForm from '../components/QuoteForm/QuoteForm';
import ProviderComparison from '../components/ProviderComparison/ProviderComparison';
import { QuoteResponse } from '../types';
import styles from '../styles/Home.module.css';

const TRUST_ITEMS = [
  { icon: '🔒', label: 'PIPEDA compliant' },
  { icon: '🇨🇦', label: 'Canadian providers only' },
  { icon: '⚡', label: '30-second quotes' },
  { icon: '🆓', label: 'Free, no obligation' },
];

const HOW_ITEMS = [
  { n: '01', title: 'Enter your postcode & needs', body: 'Tell us your location, required bandwidth, SLA, and contract preference.' },
  { n: '02', title: 'Compare live prices', body: 'We check Bell, Rogers, TELUS, Cogeco, and Videotron instantly.' },
  { n: '03', title: 'Connect with your provider', body: 'Choose the best deal and a specialist contacts you within 1 business day.' },
];

export default function Home() {
  const [quote, setQuote] = useState<QuoteResponse | null>(null);

  return (
    <>
      <Head>
        <title>Compare Leased Lines Canada — Business Internet Quotes in 30 Seconds</title>
        <meta name="description" content="Compare dedicated leased line prices from Bell, Rogers, TELUS, Cogeco and more. Free quotes for Canadian businesses in 30 seconds." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.page}>
        {/* Nav */}
        <nav className={styles.nav}>
          <a href="/" className={styles.logo}>
            <span className={styles.logoFlag}>🍁</span>
            <span className={styles.logoText}>CompareLeasedLines<span className={styles.logoCA}>.ca</span></span>
          </a>
          <div className={styles.navLinks}>
            <a href="#how" className={styles.navLink}>How it works</a>
            <a href="#providers" className={styles.navLink}>Providers</a>
            <a href="#quote" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Get quotes</a>
          </div>
        </nav>

        {/* Hero */}
        <section className={styles.hero} id="quote">
          <div className={styles.heroLeft}>
            <div className={`badge badge-red ${styles.heroPill}`}>
              🇨🇦 Now covering all major Canadian cities
            </div>
            <h1 className={`${styles.heroTitle} display`}>
              Business leased lines.<br />
              <em>Compare in seconds.</em>
            </h1>
            <p className={styles.heroSub}>
              Stop spending hours calling providers. Get real prices from Bell, Rogers, TELUS,
              Cogeco, and more — for free, in under a minute.
            </p>
            <div className={styles.trustRow}>
              {TRUST_ITEMS.map((t) => (
                <div key={t.label} className={styles.trustItem}>
                  <span>{t.icon}</span> {t.label}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroRight}>
            {quote ? (
              <ProviderComparison quote={quote} onReset={() => setQuote(null)} />
            ) : (
              <QuoteForm onResult={setQuote} />
            )}
          </div>
        </section>

        {/* How it works */}
        <section className={styles.how} id="how">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>How it works</p>
            <h2 className={`${styles.sectionTitle} display`}>Three steps to your best deal</h2>
            <div className={styles.howGrid}>
              {HOW_ITEMS.map((item) => (
                <div key={item.n} className={`card ${styles.howCard}`}>
                  <div className={styles.howNumber}>{item.n}</div>
                  <h3 className={styles.howTitle}>{item.title}</h3>
                  <p className={styles.howBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Providers */}
        <section className={styles.providers} id="providers">
          <div className={styles.sectionInner}>
            <p className={styles.sectionEyebrow}>Our network</p>
            <h2 className={`${styles.sectionTitle} display`}>Canada's leading providers</h2>
            <div className={styles.providerGrid}>
              {[
                { name: 'Bell', color: '#003DA5', coverage: 'National', sla: '99.99%' },
                { name: 'Rogers', color: '#E31837', coverage: 'National', sla: '99.9%' },
                { name: 'TELUS', color: '#4B286D', coverage: 'BC, AB + more', sla: '99.99%' },
                { name: 'Cogeco', color: '#0067B1', coverage: 'ON, QC', sla: '99.9%' },
                { name: 'Videotron', color: '#E4002B', coverage: 'Quebec', sla: '99.9%' },
              ].map((p) => (
                <div key={p.name} className={`card ${styles.providerCard}`}>
                  <div className={styles.providerBadge} style={{ background: p.color }}>{p.name}</div>
                  <div className={styles.providerMeta}>
                    <span>{p.coverage}</span>
                    <span className="badge badge-green">{p.sla} SLA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLogo}>
              🍁 CompareLeasedLines.ca
            </div>
            <p className={styles.footerText}>
              Free comparison service for Canadian businesses. PIPEDA compliant. No spam, ever.
            </p>
            <p className={styles.footerLinks}>
              <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms</a> · <a href="/contact">Contact</a>
            </p>
            <p className={styles.footerCopy}>© {new Date().getFullYear()} CompareLeasedLines.ca — Built in Canada 🍁</p>
          </div>
        </footer>
      </div>
    </>
  );
}
