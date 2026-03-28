export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'food' | 'drink';
  image: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  logo: string;
  socials: {
    instagram?: string;
    whatsapp?: string;
    facebook?: string;
  };
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  tableType: 'standard' | 'vip';
  requests?: string;
}

export interface EventBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: number;
  date: string;
  description: string;
}
