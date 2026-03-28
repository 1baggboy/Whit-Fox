import { BusinessInfo, MenuItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Whitefox Lounge",
  address: "12 Admiralty Way, Lekki Phase 1, Lagos, Nigeria",
  phone: "+234 810 000 0000",
  email: "info@whitefoxlounge.com",
  hours: {
    "Monday": "6:00 PM - 4:00 AM",
    "Tuesday": "6:00 PM - 4:00 AM",
    "Wednesday": "6:00 PM - 4:00 AM",
    "Thursday": "6:00 PM - 4:00 AM",
    "Friday": "6:00 PM - 4:00 AM",
    "Saturday": "6:00 PM - 4:00 AM",
    "Sunday": "6:00 PM - 4:00 AM"
  },
  logo: "https://picsum.photos/seed/whitefox-logo/200/200",
  socials: {
    instagram: "https://instagram.com/whitefoxlounge",
    whatsapp: "https://wa.me/2348100000000",
    facebook: "https://facebook.com/whitefoxlounge"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    name: "Grilled Lobster",
    description: "Freshly caught lobster grilled with garlic butter and herbs.",
    price: 25000,
    category: 'food',
    image: "https://picsum.photos/seed/lobster/400/300"
  },
  {
    id: "2",
    name: "Whitefox Signature Burger",
    description: "Double beef patty, caramelized onions, and our secret sauce.",
    price: 12000,
    category: 'food',
    image: "https://picsum.photos/seed/burger/400/300"
  },
  {
    id: "3",
    name: "Spicy Chicken Wings",
    description: "Crispy wings tossed in our signature spicy glaze.",
    price: 8000,
    category: 'food',
    image: "https://picsum.photos/seed/wings/400/300"
  },
  {
    id: "4",
    name: "Hennessy VSOP",
    description: "Premium cognac for the elite.",
    price: 85000,
    category: 'drink',
    image: "https://picsum.photos/seed/hennessy/400/300"
  },
  {
    id: "5",
    name: "Whitefox Martini",
    description: "Our signature cocktail with a neon twist.",
    price: 7500,
    category: 'drink',
    image: "https://picsum.photos/seed/martini/400/300"
  },
  {
    id: "6",
    name: "Moët & Chandon Imperial",
    description: "Celebrate in style with the world's most loved champagne.",
    price: 95000,
    category: 'drink',
    image: "https://picsum.photos/seed/moet/400/300"
  }
];
