import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FacilityIconProps {
  icon: LucideIcon;
  isAvailable?: boolean;
  className?: string;
}

export function FacilityIcon({ icon: Icon, isAvailable = true, className }: FacilityIconProps) {
  return (
    <div 
      className={cn(
        "p-1.5 rounded-full backdrop-blur-sm transition-colors",
        "bg-white/10 hover:bg-white/20",
        !isAvailable && "opacity-50 cursor-not-allowed",
        "cursor-pointer",
        className
      )}
    >
      <Icon className="h-4 w-4 text-white" />
    </div>
  );
}