/* frontend/src/styles/Home.module.css */

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* ── Nav ───────────────────────────────────────────────────── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--grey-200);
  padding: 0 40px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: var(--navy);
}

.logoFlag { font-size: 1.4rem; }

.logoText {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--navy);
  letter-spacing: -0.02em;
}

.logoCA { color: var(--red); }

.navLinks {
  display: flex;
  align-items: center;
  gap: 24px;
}

.navLink {
  color: var(--slate);
  text-decoration: none;
  font-size: 0.925rem;
  font-weight: 500;
  transition: color 0.15s;
}
.navLink:hover { color: var(--red); }

/* ── Hero ──────────────────────────────────────────────────── */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  min-height: calc(100vh - 64px);
  padding: 60px 80px;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(200,16,46,0.06) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(13,27,42,0.04) 0%, transparent 50%),
    var(--grey-100);
}

.heroLeft {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.heroPill {
  align-self: flex-start;
  font-size: 0.85rem !important;
  background: rgba(200,16,46,0.08) !important;
  color: var(--red) !important;
}

.heroTitle {
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  color: var(--navy);
  line-height: 1.05;
}

.heroTitle em {
  color: var(--red);
  font-style: normal;
}

.heroSub {
  font-size: 1.1rem;
  color: var(--grey-600);
  line-height: 1.7;
  max-width: 480px;
}

.trustRow {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 8px;
}

.trustItem {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--slate);
  background: var(--white);
  border: 1px solid var(--grey-200);
  padding: 6px 12px;
  border-radius: 999px;
}

.heroRight {
  display: flex;
  justify-content: center;
}

/* ── Section shared ────────────────────────────────────────── */
.sectionInner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 40px;
}

.sectionEyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 12px;
}

.sectionTitle {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: var(--navy);
  margin-bottom: 48px;
}

/* ── How it works ──────────────────────────────────────────── */
.how {
  padding: 100px 0;
  background: var(--white);
}

.howGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.howCard {
  padding: 32px;
}

.howNumber {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--red);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 16px;
}

.howTitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 8px;
}

.howBody {
  color: var(--grey-600);
  font-size: 0.95rem;
  line-height: 1.65;
}

/* ── Providers ─────────────────────────────────────────────── */
.providers {
  padding: 100px 0;
  background: var(--navy);
}

.providers .sectionEyebrow { color: rgba(255,255,255,0.5); }
.providers .sectionTitle { color: var(--white); }

.providerGrid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.providerCard {
  background: rgba(255,255,255,0.05) !important;
  border: 1px solid rgba(255,255,255,0.1) !important;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.providerBadge {
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
}

.providerMeta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
}

/* ── Footer ────────────────────────────────────────────────── */
.footer {
  background: var(--navy-mid);
  border-top: 1px solid rgba(255,255,255,0.06);
  padding: 60px 0;
}

.footerInner {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footerLogo {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}

.footerText {
  color: rgba(255,255,255,0.5);
  font-size: 0.875rem;
}

.footerLinks {
  font-size: 0.85rem;
}
.footerLinks a {
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.15s;
}
.footerLinks a:hover { color: var(--white); }

.footerCopy {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.3);
  margin-top: 8px;
}

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero { grid-template-columns: 1fr; padding: 60px 40px; min-height: auto; gap: 40px; }
  .providerGrid { grid-template-columns: repeat(3, 1fr); }
  .howGrid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .nav { padding: 0 20px; }
  .navLinks { gap: 12px; }
  .hero { padding: 40px 20px; }
  .sectionInner { padding: 0 20px; }
  .providerGrid { grid-template-columns: repeat(2, 1fr); }
}
