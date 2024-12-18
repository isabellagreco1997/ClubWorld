import { ClubFacility } from '@/types/club';
import { TooltipProvider } from "@/components/ui/tooltip";
import { FacilityTooltip } from './facility/FacilityTooltip';

interface ClubFacilitiesProps {
  facilities: ClubFacility[];
}

export function ClubFacilities({ facilities }: ClubFacilitiesProps) {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {facilities.slice(0, 4).map((facility) => (
          <FacilityTooltip 
            key={facility.name} 
            facility={facility} 
          />
        ))}
      </div>
    </TooltipProvider>
  );
}