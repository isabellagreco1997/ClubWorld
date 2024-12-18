import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Wifi, 
  Dumbbell, 
  Calendar, 
  Users,
  DollarSign
} from "lucide-react";
import { FilterState } from "@/types";

interface FilterTagsProps {
  filters: FilterState;
  onToggleAmenity: (amenity: keyof FilterState['amenities']) => void;
  onPriceRangeClick: () => void;
}

export function FilterTags({ filters, onToggleAmenity, onPriceRangeClick }: FilterTagsProps) {
  const amenityIcons = {
    wifi: Wifi,
    gym: Dumbbell,
    events: Calendar,
    guests: Users,
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {/* Price Range Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={onPriceRangeClick}
        className={`bg-gray-100 hover:bg-gray-200 text-gray-900 gap-1.5`}
      >
        <DollarSign className="h-4 w-4" />
        ${filters.priceRange[0].toLocaleString()} - ${filters.priceRange[1].toLocaleString()}
      </Button>

      {/* Amenity Filter Badges */}
      {Object.entries(filters.amenities).map(([key, isActive]) => {
        const IconComponent = amenityIcons[key as keyof typeof amenityIcons];
        return (
          <Badge
            key={key}
            variant={isActive ? "default" : "outline"}
            className={`
              cursor-pointer px-3 py-1.5 text-sm
              ${isActive ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}
            `}
            onClick={() => onToggleAmenity(key as keyof FilterState['amenities'])}
          >
            {IconComponent && <IconComponent className="h-3.5 w-3.5 mr-1.5 inline-block" />}
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Badge>
        );
      })}
    </div>
  );
}