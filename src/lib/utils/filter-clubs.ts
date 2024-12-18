import { Club } from '@/types/club';

export function filterClubsBySearch(clubs: Club[], searchQuery: string): Club[] {
  if (!searchQuery) return clubs;
  
  const query = searchQuery.toLowerCase();
  return clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(query) ||
      club.city.toLowerCase().includes(query)
  );
}

export function filterClubsByPrice(clubs: Club[], priceRange: [number, number]): Club[] {
  const [min, max] = priceRange;
  return clubs.filter((club) => {
    // Safely access nested properties
    const annualFee = club.membershipFees?.annual;
    if (typeof annualFee !== 'number') return false;
    return annualFee >= min && annualFee <= max;
  });
}

export function filterClubsByAmenities(clubs: Club[], amenities: string[]): Club[] {
  if (!amenities.length) return clubs;
  
  return clubs.filter((club) =>
    amenities.every((amenity) => 
      club.facilities?.some(facility => 
        facility.name.toLowerCase().includes(amenity.toLowerCase()) &&
        facility.isAvailable
      )
    )
  );
}

export function sortClubs(clubs: Club[], sortBy: string): Club[] {
  return [...clubs].sort((a, b) => {
    switch (sortBy) {
      case 'rank':
        return (a.rank || 0) - (b.rank || 0);
      case 'price':
        return (a.membershipFees?.annual || 0) - (b.membershipFees?.annual || 0);
      case 'established':
        return (a.establishedYear || 0) - (b.establishedYear || 0);
      default:
        return 0;
    }
  });
}