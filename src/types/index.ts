export interface Club {
  id: number;
  name: string;
  location: string;
  price: number;
  internetSpeed: number;
  image: string;
  status: 'POPULAR NOW' | 'RISING' | 'FEATURED';
  featured: boolean;
  popularity: number;
  amenities: string[];
  description?: string;
  openingHours?: string;
  neighborhood?: string;
}

export interface FilterState {
  priceRange: number[];
  amenities: {
    wifi: boolean;
    gym: boolean;
    events: boolean;
    guests: boolean;
  };
}