import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ClubFacility } from '@/types/club';
import { FacilityIcon } from './FacilityIcon';
import { getFacilityIcon } from '@/lib/utils/facility-icons';

interface FacilityTooltipProps {
  facility: ClubFacility;
}

export function FacilityTooltip({ facility }: FacilityTooltipProps) {
  const Icon = getFacilityIcon(facility.name);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span>
          <FacilityIcon 
            icon={Icon} 
            isAvailable={facility.isAvailable} 
          />
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <div className="space-y-1">
          <p className="font-medium">{facility.name}</p>
          <p className="text-sm text-muted-foreground">{facility.description}</p>
          {!facility.isAvailable && (
            <p className="text-sm text-yellow-500">Temporarily Unavailable</p>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}