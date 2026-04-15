export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}

export interface ArCustomer {
  customerNumber: number;
  customerName: string;
  customerAddress: string;
  customerCity: string;
  customerState: string;
  customerZipCode: string;
  customerPhone: string;
  activityCode?: string;
}

export interface ProCustomer {
  customerType: 'pro';
  customerNumber: number;
  customerName: string;
  customerAddress: string;
  customerCity: string;
  customerState: string;
  customerZipCode: string;
  customerPhone: string;
  accountNotes?: string;
  activityCode?: string;
  customerTypeDesc?: string;
}

export interface CashCustomer {
  customerType: 'cash';
  customerNumbers: number[];
  firstName: string;
  lastName: string;
  preferredPhone?: string;
  preferredEmail?: string;
  addresses: Address[];
}

const arCustomers = new Map<number, ArCustomer>([
  [
    90001234,
    {
      customerNumber: 90001234,
      customerName: 'OReilly Test Garage',
      customerAddress: '123 Pilot Way',
      customerCity: 'Springfield',
      customerState: 'MO',
      customerZipCode: '65807',
      customerPhone: '417-555-0188',
      activityCode: 'ACTIVE'
    }
  ]
]);

const proCustomers = new Map<number, ProCustomer>([
  [
    90001234,
    {
      customerType: 'pro',
      customerNumber: 90001234,
      customerName: 'OReilly Test Garage',
      customerAddress: '123 Pilot Way',
      customerCity: 'Springfield',
      customerState: 'MO',
      customerZipCode: '65807',
      customerPhone: '417-555-0188',
      accountNotes: 'Preferred commercial account',
      activityCode: 'ACTIVE',
      customerTypeDesc: 'Professional installer'
    }
  ]
]);

const cashCustomers = new Map<number, CashCustomer>([
  [
    70004567,
    {
      customerType: 'cash',
      customerNumbers: [70004567],
      firstName: 'Casey',
      lastName: 'Driver',
      preferredPhone: '417-555-0177',
      preferredEmail: 'casey.driver@example.com',
      addresses: [
        {
          line1: '55 Market Street',
          city: 'Springfield',
          state: 'MO',
          postalCode: '65806',
          countryCode: 'US'
        }
      ]
    }
  ]
]);

export function getArCustomer(customerNumber: number): ArCustomer | undefined {
  return arCustomers.get(customerNumber);
}

export function getProCustomer(customerNumber: number): ProCustomer | undefined {
  return proCustomers.get(customerNumber);
}

export function getCashCustomer(customerNumber: number): CashCustomer | undefined {
  return cashCustomers.get(customerNumber);
}

