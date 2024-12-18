import { 
  Wifi, 
  Users, 
  Dumbbell, 
  Calendar, 
  UtensilsCrossed,
  Building2, // Using Building2 instead of Spa
  Briefcase, 
  Mic2, 
  Coffee 
} from 'lucide-react';

export const amenityIcons = {
  wifi: Wifi,
  guests: Users,
  gym: Dumbbell,
  events: Calendar,
  restaurant: UtensilsCrossed,
  spa: Building2, // Using Building2 as a temporary replacement for Spa
  'business-center': Briefcase,
  'podcast-studio': Mic2,
  'co-working': Coffee
} as const;