// frontend/src/components/ProviderComparison/ProviderComparison.tsx
import { useState } from 'react';
import { QuoteResponse, QuoteResult } from '../../types';
import { api } from '../../services/api';
import styles from './ProviderComparison.module.css';

interface Props {
  quote: QuoteResponse;
  onReset: () => void;
}

const PROVIDER_COLORS: Record<string, string> = {
  bell: '#003DA5',
  rogers: '#E31837',
  telus: '#4B286D',
  cogeco: '#0067B1',
  videotron: '#E4002B',
};

export default function ProviderComparison({ quote, onReset }: Props) {
  const [selected, setSelected] = useState<string | null>(null);
  const [leadSent, setLeadSent] = useState(false);
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadError, setLeadError] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'sla' | 'install'>('price');

  const available = quote.results.filter((r) => r.available);
  const unavailable = quote.results.filter((r) => !r.available);

  const sorted = [...available].sort((a, b) => {
    if (sortBy === 'price') return a.monthlyPriceCad - b.monthlyPriceCad;
    if (sortBy === 'sla') return b.slaUptime - a.slaUptime;
    if (sortBy === 'install') return a.installWeeksMin - b.installWeeksMin;
    return 0;
  });

  const cheapest = available.length ? Math.min(...available.map((r) => r.monthlyPriceCad)) : 0;

  const handleConnect = async (result: QuoteResult) => {
    // In production, open a modal to collect contact details
    // For now, submit with quote's contact info
    setLeadLoading(true);
    setLeadError('');
    try {
      await api.submitLead({
        quoteId: quote.quoteId,
        providerId: result.providerId,
        businessName: 'Demo Business', // Replace with form data from state
        contactName: 'Demo User',
        contactEmail: 'demo@example.com',
      });
      setSelected(result.providerId);
      setLeadSent(true);
    } catch (e: unknown) {
      setLeadError(e instanceof Error ? e.message : 'Failed to connect. Please try again.');
    } finally {
      setLeadLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h2 className={`${styles.title} display`}>Your Quotes</h2>
          <p className={styles.subtitle}>
            {available.length} provider{available.length !== 1 ? 's' : ''} available for{' '}
            <strong>{quote.bandwidthMbps >= 1000 ? `${quote.bandwidthMbps / 1000} Gbps` : `${quote.bandwidthMbps} Mbps`}</strong>{' '}
            in <strong>{quote.postalCode}</strong>
          </p>
        </div>
        <button className="btn-secondary" onClick={onReset}>← New quote</button>
      </div>

      {/* Sort controls */}
      {available.length > 1 && (
        <div className={styles.sortBar}>
          <span className={styles.sortLabel}>Sort by:</span>
          {(['price', 'sla', 'install'] as const).map((opt) => (
            <button
              key={opt}
              className={`${styles.sortBtn} ${sortBy === opt ? styles.sortActive : ''}`}
              onClick={() => setSortBy(opt)}
            >
              {opt === 'price' ? '💰 Price' : opt === 'sla' ? '⬆️ Uptime' : '⚡ Install speed'}
            </button>
          ))}
        </div>
      )}

      {leadSent && (
        <div className={styles.successBanner}>
          <span>✅</span>
          <div>
            <strong>Request sent!</strong> A specialist from {selected} will contact you within 1 business day.
          </div>
        </div>
      )}

      {leadError && <p className={styles.error}>{leadError}</p>}

      {/* Available providers */}
      <div className={`${styles.cards} stagger`}>
        {sorted.map((result, i) => (
          <div
            key={result.providerId}
            className={`${styles.card} animate-fadeUp ${result.monthlyPriceCad === cheapest && i === 0 ? styles.bestValue : ''}`}
          >
            {result.monthlyPriceCad === cheapest && i === 0 && (
              <div className={styles.bestBadge}>Best Price</div>
            )}

            <div className={styles.cardTop}>
              <div
                className={styles.providerLogo}
                style={{ background: PROVIDER_COLORS[result.providerId] || '#333' }}
              >
                {result.providerName}
              </div>
              <div className={styles.pricing}>
                <div className={styles.monthlyPrice}>
                  ${result.monthlyPriceCad.toLocaleString('en-CA')}
                  <span className={styles.perMonth}>/mo</span>
                </div>
                <div className={styles.setupFee}>
                  + ${result.setupFeeCad.toLocaleString('en-CA')} setup
                </div>
              </div>
            </div>

            <div className={styles.specs}>
              <div className={styles.spec}>
                <span className={styles.specLabel}>SLA Uptime</span>
                <span className={`badge ${result.slaUptime >= 99.99 ? 'badge-green' : 'badge-navy'}`}>
                  {result.slaUptime}%
                </span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Installation</span>
                <span className={styles.specValue}>
                  {result.installWeeksMin}–{result.installWeeksMax} weeks
                </span>
              </div>
              <div className={styles.spec}>
                <span className={styles.specLabel}>Annual cost</span>
                <span className={styles.specValue}>
                  ${(result.monthlyPriceCad * 12).toLocaleString('en-CA')} CAD
                </span>
              </div>
            </div>

            {result.notes && <p className={styles.notes}>{result.notes}</p>}

            <button
              className={`btn-primary ${styles.connectBtn}`}
              onClick={() => handleConnect(result)}
              disabled={leadLoading || leadSent}
            >
              {selected === result.providerId ? '✓ Request sent' : 'Connect with provider →'}
            </button>
          </div>
        ))}
      </div>

      {/* Unavailable providers */}
      {unavailable.length > 0 && (
        <div className={styles.unavailable}>
          <h3 className={styles.unavailableTitle}>Not available in your area</h3>
          <div className={styles.unavailableList}>
            {unavailable.map((r) => (
              <div key={r.providerId} className={styles.unavailableItem}>
                <div
                  className={styles.unavailableLogo}
                  style={{ background: PROVIDER_COLORS[r.providerId] || '#999' }}
                >
                  {r.providerName}
                </div>
                <span className={styles.unavailableNote}>{r.notes}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
