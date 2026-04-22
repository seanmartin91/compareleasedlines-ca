/* frontend/src/components/ProviderComparison/ProviderComparison.module.css */
.wrapper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.title {
  font-size: 2rem;
  color: var(--navy);
  margin-bottom: 4px;
}

.subtitle {
  color: var(--grey-600);
  font-size: 1rem;
}

/* Sort */
.sortBar {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.sortLabel {
  font-size: 0.875rem;
  color: var(--grey-400);
  font-weight: 500;
}

.sortBtn {
  padding: 6px 14px;
  border: 1.5px solid var(--grey-200);
  border-radius: 999px;
  background: var(--white);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--slate);
  cursor: pointer;
  transition: all 0.15s;
  font-family: var(--font-body);
}

.sortBtn:hover { border-color: var(--red); color: var(--red); }
.sortActive { background: var(--red) !important; border-color: var(--red) !important; color: var(--white) !important; }

/* Cards */
.cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.card {
  background: var(--white);
  border: 1.5px solid var(--grey-200);
  border-radius: var(--radius);
  padding: 28px;
  position: relative;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--grey-400);
}

.bestValue {
  border-color: var(--red);
  box-shadow: 0 0 0 1px var(--red), var(--shadow-md);
}

.bestBadge {
  position: absolute;
  top: -1px;
  right: 24px;
  background: var(--red);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 0 0 8px 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cardTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 16px;
}

.providerLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  padding: 10px 18px;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
}

.pricing {
  text-align: right;
}

.monthlyPrice {
  font-size: 2rem;
  font-weight: 700;
  color: var(--navy);
  line-height: 1;
}

.perMonth {
  font-size: 1rem;
  font-weight: 400;
  color: var(--grey-400);
}

.setupFee {
  font-size: 0.85rem;
  color: var(--grey-400);
  margin-top: 2px;
}

/* Specs */
.specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 20px 0;
  border-top: 1px solid var(--grey-200);
  border-bottom: 1px solid var(--grey-200);
  margin-bottom: 20px;
}

.spec {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.specLabel {
  font-size: 0.75rem;
  color: var(--grey-400);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.specValue {
  font-weight: 600;
  font-size: 0.925rem;
  color: var(--navy);
}

.notes {
  font-size: 0.85rem;
  color: var(--grey-600);
  margin-bottom: 16px;
  font-style: italic;
}

.connectBtn {
  width: 100%;
  justify-content: center;
}

/* Success */
.successBanner {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #E8F5E9;
  border: 1px solid #A5D6A7;
  border-radius: var(--radius-sm);
  padding: 16px 20px;
  margin-bottom: 24px;
  color: #1B5E20;
  font-size: 0.9rem;
}

.error {
  background: #FFEBEE;
  color: var(--red);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  margin-bottom: 20px;
  border-left: 3px solid var(--red);
}

/* Unavailable */
.unavailable {
  background: var(--grey-100);
  border-radius: var(--radius);
  padding: 24px 28px;
  border: 1px solid var(--grey-200);
}

.unavailableTitle {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--grey-400);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.unavailableList {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.unavailableItem {
  display: flex;
  align-items: center;
  gap: 14px;
  opacity: 0.55;
}

.unavailableLogo {
  min-width: 90px;
  padding: 6px 12px;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  font-size: 0.8rem;
  text-align: center;
}

.unavailableNote {
  font-size: 0.85rem;
  color: var(--grey-600);
}

@media (max-width: 640px) {
  .cardTop { flex-direction: column; align-items: flex-start; }
  .pricing { text-align: left; }
  .specs { grid-template-columns: 1fr 1fr; }
  .header { flex-direction: column; }
}
