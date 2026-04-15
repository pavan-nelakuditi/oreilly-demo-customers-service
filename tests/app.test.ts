import inject from 'light-my-request';
import { describe, expect, it } from 'vitest';

import { app } from '../src/app.js';

describe('customers-service', () => {
  it('returns the AR customer fixture', async () => {
    const response = await inject(app, {
      method: 'GET',
      url: '/customers/ar/90001234'
    });
    const body = response.json();

    expect(response.statusCode).toBe(200);
    expect(body.customerNumber).toBe(90001234);
    expect(body.customerName).toBe('OReilly Test Garage');
  });

  it('returns the Pro customer fixture', async () => {
    const response = await inject(app, {
      method: 'GET',
      url: '/customers/pro/90001234'
    });
    const body = response.json();

    expect(response.statusCode).toBe(200);
    expect(body.customerType).toBe('pro');
    expect(body.customerTypeDesc).toBe('Professional installer');
  });

  it('returns the Cash customer fixture', async () => {
    const response = await inject(app, {
      method: 'GET',
      url: '/customers/cash/70004567'
    });
    const body = response.json();

    expect(response.statusCode).toBe(200);
    expect(body.customerType).toBe('cash');
    expect(body.customerNumbers).toEqual([70004567]);
  });

  it('returns a contract-shaped error for unknown customers', async () => {
    const response = await inject(app, {
      method: 'GET',
      url: '/customers/pro/99999999'
    });
    const body = response.json();

    expect(response.statusCode).toBe(404);
    expect(body.code).toBe('NOT_FOUND');
    expect(typeof body.correlationId).toBe('string');
  });
});

