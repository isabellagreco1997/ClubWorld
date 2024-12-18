import { Badge } from "@/components/ui/badge";

interface ClubCardBadgesProps {
  status: string;
  internetSpeed: number;
}

export function ClubCardBadges({ status, internetSpeed }: ClubCardBadgesProps) {
  return (
    <div className="flex justify-between items-start">
      <Badge 
        variant={status === 'POPULAR NOW' ? 'default' : 'secondary'} 
        className="uppercase"
      >
        {status}
      </Badge>
      <Badge 
        variant="outline" 
        className="bg-black/50 text-white border-none"
      >
        {internetSpeed} Mbps
      </Badge>
    </div>
  );
}