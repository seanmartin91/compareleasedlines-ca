# Compare Leased Lines CA 🇨🇦

> A fast, transparent comparison platform for Canadian businesses to find and quote dedicated leased line services — built for SMBs who need reliable connectivity without the runaround.

[![CI](https://github.com/seanmartin91/compareleasedlines-ca/actions/workflows/ci.yml/badge.svg)](https://github.com/seanmartin91/compareleasedlines-ca/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Canadian Providers](#canadian-providers)
- [Compliance & Legal](#compliance--legal)
- [API Documentation](#api-documentation)
- [Running with Docker](#running-with-docker)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Canadian SMBs spend hours trying to compare leased line options across fragmented provider websites with opaque pricing. **Compare Leased Lines CA** solves this with a 30-second quote engine that pulls real-time pricing from Bell, Rogers, TELUS, Cogeco, and Videotron — letting businesses compare side-by-side and connect with the right provider instantly.

**Why Canada, why now?**
- The CRTC's February 2025 wholesale fibre access mandate opened up new competitive opportunities
- No equivalent Canadian comparison platform exists
- Remote work growth is driving unprecedented demand for dedicated connectivity

---

## Features

- ⚡ **30-Second Quote Engine** — Enter your postal code, bandwidth needs, and SLA requirements; get instant quotes
- 🔍 **Side-by-Side Comparison** — Compare Bell, Rogers, TELUS, Cogeco, Videotron and more on price, uptime, and installation timelines
- 🗺️ **Coverage Maps** — Real-time availability by postal code and province
- 📋 **SLA Transparency** — Uptime guarantees and contract terms displayed clearly — no hidden fees
- 🔒 **PIPEDA-Compliant** — All business data handled securely under Canadian privacy law
- 📞 **Expert Advisor Support** — Connect with a specialist for complex requirements
- 📊 **Admin Dashboard** — Track quote volume, lead conversions, and provider performance

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL 14+ |
| ORM | Prisma |
| Auth | NextAuth.js |
| Payments | Stripe |
| Email | SendGrid |
| Hosting | AWS (EC2 + RDS) or Heroku |
| CI/CD | GitHub Actions |
| Containerisation | Docker + Docker Compose |

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [PostgreSQL 14+](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) *(optional, for containerised local dev)*

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/seanmartin91/compareleasedlines-ca.git
cd compareleasedlines-ca

# 2. Install backend dependencies
cd backend && npm install && cd ..

# 3. Install frontend dependencies
cd frontend && npm install && cd ..

# 4. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials (see Environment Variables below)

# 5. Run database migrations
cd backend && npm run migrate && cd ..

# 6. Start both services in development mode
# Terminal 1 — Backend (runs on http://localhost:3001)
cd backend && npm run dev

# Terminal 2 — Frontend (runs on http://localhost:3000)
cd frontend && npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
compareleasedlines-ca/
│
├── backend/                        # Node.js/Express API
│   ├── src/
│   │   ├── api/
│   │   │   ├── quotes/             # Quote request & pricing logic
│   │   │   ├── providers/          # Provider data & availability
│   │   │   └── auth/               # Authentication endpoints
│   │   ├── services/
│   │   │   ├── provider-integrations/  # Bell, Rogers, TELUS API clients
│   │   │   ├── pricing-engine/     # Quote calculation logic
│   │   │   └── lead-management/    # CRM and lead routing
│   │   ├── database/
│   │   │   ├── models/             # Prisma schema & models
│   │   │   └── migrations/         # Database migration files
│   │   └── middleware/             # Auth, rate limiting, logging
│   ├── tests/
│   └── package.json
│
├── frontend/                       # Next.js 14 app
│   ├── src/
│   │   ├── components/
│   │   │   ├── QuoteForm/          # Multi-step quote wizard
│   │   │   ├── ProviderComparison/ # Side-by-side results table
│   │   │   ├── ResultsDisplay/     # Quote results and CTA
│   │   │   └── common/            # Shared UI components
│   │   ├── pages/
│   │   │   ├── index.tsx           # Homepage
│   │   │   ├── quote.tsx           # Quote flow
│   │   │   ├── results.tsx         # Comparison results
│   │   │   └── admin/             # Admin dashboard (protected)
│   │   ├── services/               # API call wrappers
│   │   ├── styles/                 # Tailwind & global CSS
│   │   └── types/                  # Shared TypeScript types
│   ├── public/                     # Static assets
│   ├── tests/
│   └── package.json
│
├── docs/
│   ├── API.md                      # REST API reference
│   ├── COMPLIANCE.md               # PIPEDA, CASL, CRTC requirements
│   ├── PROVIDERS.md                # Provider integration details & pricing
│   ├── BUSINESS_PLAN.md            # Financial projections & roadmap
│   └── ARCHITECTURE.md             # System architecture diagrams
│
├── .github/
│   └── workflows/
│       ├── ci.yml                  # Run tests on push/PR
│       └── deploy.yml              # Deploy to production on merge to main
│
├── .env.example                    # Environment variable template
├── docker-compose.yml              # Local dev with Docker
├── PROJECT_STRUCTURE.md
├── LICENSE
└── README.md
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```env
# ── Database ──────────────────────────────────────────────────
DATABASE_URL=postgresql://user:password@localhost:5432/compareleasedlines_ca

# ── Provider API Keys ─────────────────────────────────────────
BELL_API_KEY=your_bell_api_key
ROGERS_API_KEY=your_rogers_api_key
TELUS_API_KEY=your_telus_api_key
COGECO_API_KEY=your_cogeco_api_key
VIDEOTRON_API_KEY=your_videotron_api_key

# ── Stripe ────────────────────────────────────────────────────
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# ── Email ─────────────────────────────────────────────────────
SENDGRID_API_KEY=your_sendgrid_key
ADMIN_EMAIL=admin@compareleasedlines.ca

# ── App ───────────────────────────────────────────────────────
NEXT_PUBLIC_API_URL=http://localhost:3001
NODE_ENV=development
```

> ⚠️ **Never commit `.env.local` or any file containing real API keys to version control.**

---

## Canadian Providers

| Provider | Coverage | Typical 1 Gbps/month | SLA Uptime | Installation |
|----------|----------|----------------------|------------|--------------|
| Bell | National | $1,100–$1,300 CAD | 99.99% | 4–8 weeks |
| Rogers | National | $1,150–$1,350 CAD | 99.9–99.99% | 4–8 weeks |
| TELUS | National (strong West) | $1,100–$1,300 CAD | 99.99% | 3–6 weeks |
| Cogeco | Ontario, Quebec | $900–$1,100 CAD | 99.5–99.99% | 2–4 weeks |
| Videotron | Quebec + expanding | $1,000–$1,200 CAD | 99.9% | 2–4 weeks |

Pricing is updated weekly for Tier 1 providers and bi-weekly for regional providers. See [`docs/PROVIDERS.md`](docs/PROVIDERS.md) for full integration details.

---

## Compliance & Legal

This platform handles Canadian business data and operates under:

| Regulation | Summary |
|-----------|---------|
| **PIPEDA** | Collect only what's needed; encrypt at rest & in transit; honour access/deletion requests |
| **CASL** | Express consent for marketing; unsubscribe in every email; maintain consent records |
| **CRTC** | Transparent pricing; no hidden fees; clear SLAs; complaint handling process |
| **Quebec Law 25** | Stricter consent rules for Quebec residents |

Full compliance documentation: [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md)

---

## API Documentation

The backend exposes a REST API on port `3001`. Key endpoints:

```
GET  /health                        Health check
POST /api/quotes                    Submit a quote request
GET  /api/quotes/:id                Retrieve a specific quote
GET  /api/providers                 List all active providers
GET  /api/providers/:id/coverage    Check coverage for a postal code
POST /api/leads                     Submit a qualified lead
```

Full API reference: [`docs/API.md`](docs/API.md)

---

## Running with Docker

The fastest way to get a full local environment running:

```bash
# Start PostgreSQL, backend, and frontend
docker-compose up

# Frontend → http://localhost:3000
# Backend  → http://localhost:3001
# Postgres → localhost:5432
```

To rebuild after making changes:

```bash
docker-compose up --build
```

---

## Testing

```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test

# Watch mode
npm run test:watch

# Full CI run (linting + tests)
npm run lint && npm test
```

---

## Roadmap

### Phase 1 — MVP (Months 1–3)
- [x] Project setup & repo structure
- [ ] Quote engine (postal code + bandwidth → instant quote)
- [ ] Bell, Rogers, TELUS integrations
- [ ] Public launch in Toronto, Vancouver, Montreal

### Phase 2 — Monetisation (Months 4–9)
- [ ] Cogeco & Videotron integrations
- [ ] Admin dashboard & lead management CRM
- [ ] Stripe billing for provider lead fees
- [ ] Expansion to Calgary, Ottawa, Edmonton

### Phase 3 — Scale (Year 2)
- [ ] National expansion
- [ ] White-label platform for resellers
- [ ] Managed add-ons (firewall, VPN, SD-WAN)
- [ ] Mobile app

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please read [`docs/COMPLIANCE.md`](docs/COMPLIANCE.md) before working on any data-handling features.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

*Built in Canada 🍁 for Canadian businesses.*
