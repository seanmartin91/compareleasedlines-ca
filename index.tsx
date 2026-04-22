// frontend/src/services/api.ts
import { QuoteFormData, QuoteResponse, Provider } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Unknown error' }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

export const api = {
  async getQuote(data: QuoteFormData): Promise<QuoteResponse> {
    return request<QuoteResponse>('/api/quotes', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  async getQuoteById(id: string): Promise<QuoteResponse> {
    return request<QuoteResponse>(`/api/quotes/${id}`);
  },

  async getProviders(): Promise<Provider[]> {
    return request<Provider[]>('/api/providers');
  },

  async checkCoverage(postalCode: string): Promise<{ province: string; providers: Provider[] }> {
    return request(`/api/providers/coverage?postal=${encodeURIComponent(postalCode)}`);
  },

  async submitLead(data: {
    quoteId: string;
    providerId: string;
    businessName: string;
    contactName: string;
    contactEmail: string;
    contactPhone?: string;
  }): Promise<{ leadId: string }> {
    return request('/api/leads', { method: 'POST', body: JSON.stringify(data) });
  },
};
