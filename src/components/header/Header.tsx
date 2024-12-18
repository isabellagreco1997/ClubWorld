import { FilterButton } from './FilterButton';
import { SearchBar } from './SearchBar';
import { SortSelect } from './SortSelect';
import { FilterTags } from './FilterTags';
import { FilterState } from '@/types';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
  onOpenFilters: () => void;
  filters: FilterState;
  onToggleAmenity: (amenity: keyof FilterState['amenities']) => void;
}

export function Header({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onOpenFilters,
  filters,
  onToggleAmenity,
}: HeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-4 w-full sm:w-auto">
          <SearchBar value={searchQuery} onChange={onSearchChange} />
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <SortSelect value={sortBy} onValueChange={onSortChange} />
        </div>
      </div>
      
      <FilterTags 
        filters={filters}
        onToggleAmenity={onToggleAmenity}
        onPriceRangeClick={onOpenFilters}
      />
    </div>
  );
}