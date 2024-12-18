import { useState } from 'react';
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/hero/Hero";
import { Header } from './components/header/Header';
import { ClubGrid } from './components/club/ClubGrid';
import FiltersDialog from './components/FiltersDialog';
import { useClubFiltering } from './hooks/useClubFiltering';
import { useClubs } from './hooks/useClubs';
import { FilterState } from '@/types';
import { Alert, AlertDescription } from './components/ui/alert';
import { Loader2 } from 'lucide-react';

const initialFilters: FilterState = {
  priceRange: [0, 50000],
  amenities: {
    wifi: false,
    gym: false,
    events: false,
    guests: false
  }
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('rank');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const { clubs, loading, error } = useClubs();

  const filteredClubs = useClubFiltering({
    clubs,
    searchQuery,
    sortBy,
    filters: {
      priceRange: filters.priceRange,
      amenities: Object.entries(filters.amenities)
        .filter(([_, enabled]) => enabled)
        .map(([amenity]) => amenity)
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col gap-6">
          <Header
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onOpenFilters={() => setIsFiltersOpen(true)}
            filters={filters}
            onToggleAmenity={(amenity) => {
              setFilters(prev => ({
                ...prev,
                amenities: {
                  ...prev.amenities,
                  [amenity]: !prev.amenities[amenity]
                }
              }));
            }}
          />

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : error ? (
            <Alert variant="destructive">
              <AlertDescription>
                Failed to load clubs. Please try again later.
              </AlertDescription>
            </Alert>
          ) : (
            <ClubGrid clubs={filteredClubs} />
          )}
        </div>
      </div>

      <FiltersDialog 
        open={isFiltersOpen} 
        onOpenChange={setIsFiltersOpen}
        filters={filters}
        onFiltersChange={setFilters}
        onReset={() => setFilters(initialFilters)}
      />
    </div>
  );
}