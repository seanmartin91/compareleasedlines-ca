// frontend/src/types/index.ts

export interface Provider {
  id: string;
  slug: string;
  name: string;
  logoUrl?: string;
  website?: string;
  phone?: string;
  coverageRegions: string[];
  slaUptime: number;
  installWeeksMin: number;
  installWeeksMax: number;
}

export interface QuoteResult {
  providerId: string;
  providerName: string;
  logoUrl?: string;
  monthlyPriceCad: number;
  setupFeeCad: number;
  slaUptime: number;
  installWeeksMin: number;
  installWeeksMax: number;
  available: boolean;
  notes?: string;
}

export interface QuoteResponse {
  quoteId: string;
  province: string;
  postalCode: string;
  bandwidthMbps: number;
  results: QuoteResult[];
}

export interface QuoteFormData {
  postalCode: string;
  bandwidthMbps: number;
  contractYears: number;
  slaRequired: number;
  businessName: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export const BANDWIDTH_OPTIONS = [
  { label: '10 Mbps', value: 10 },
  { label: '50 Mbps', value: 50 },
  { label: '100 Mbps', value: 100 },
  { label: '250 Mbps', value: 250 },
  { label: '500 Mbps', value: 500 },
  { label: '1 Gbps', value: 1000 },
  { label: '2 Gbps', value: 2000 },
  { label: '10 Gbps', value: 10000 },
];

export const SLA_OPTIONS = [
  { label: '99.0% (Standard)', value: 99.0 },
  { label: '99.5% (Enhanced)', value: 99.5 },
  { label: '99.9% (Business)', value: 99.9 },
  { label: '99.99% (Premium)', value: 99.99 },
];

export const CONTRACT_OPTIONS = [
  { label: '1 Year', value: 1 },
  { label: '2 Years (5% off)', value: 2 },
  { label: '3 Years (10% off)', value: 3 },
];
