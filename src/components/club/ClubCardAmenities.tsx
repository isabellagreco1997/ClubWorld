import { amenityIcons } from '@/lib/constants/amenity-icons';

interface ClubCardAmenitiesProps {
  amenities: string[];
}

export function ClubCardAmenities({ amenities }: ClubCardAmenitiesProps) {
  return (
    <div className="flex gap-2">
      {amenities.slice(0, 4).map((amenity) => {
        const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
        return Icon ? <Icon key={amenity} className="h-4 w-4 text-white" /> : null;
      })}
    </div>
  );
}