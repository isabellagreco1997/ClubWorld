import { useMemo } from 'react';
import { Club } from '@/types';
import {
  filterClubsBySearch,
  filterClubsByPrice,
  filterClubsByAmenities,
  sortClubs,
} from '@/lib/utils/filter-clubs';

interface UseClubFilteringProps {
  clubs: Club[];
  searchQuery: string;
  sortBy: string;
  filters?: {
    priceRange?: [number, number];
    amenities?: string[];
  };
}

export function useClubFiltering({
  clubs,
  searchQuery,
  sortBy,
  filters,
}: UseClubFilteringProps) {
  return useMemo(() => {
    let filtered = clubs;

    // Apply filters sequentially
    filtered = filterClubsBySearch(filtered, searchQuery);
    
    if (filters?.priceRange) {
      filtered = filterClubsByPrice(filtered, filters.priceRange);
    }
    
    if (filters?.amenities?.length) {
      filtered = filterClubsByAmenities(filtered, filters.amenities);
    }

    // Apply sorting last
    return sortClubs(filtered, sortBy);
  }, [clubs, searchQuery, sortBy, filters]);
}