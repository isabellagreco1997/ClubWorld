import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Wifi, Users, Dumbbell, Calendar, Utensils, Spa, Briefcase, Mic2, Coffee } from 'lucide-react';
import { Club } from '@/types';

interface ClubCardProps {
  club: Club;
}

const amenityIcons: Record<string, React.ComponentType> = {
  wifi: Wifi,
  guests: Users,
  gym: Dumbbell,
  events: Calendar,
  restaurant: Utensils,
  spa: Spa,
  'business-center': Briefcase,
  'podcast-studio': Mic2,
  'co-working': Coffee
};

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Card className="group relative overflow-hidden rounded-xl transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3]">
        {/* Background Image */}
        <img
          src={club.image}
          alt={club.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <Badge variant={club.status === 'POPULAR NOW' ? 'default' : 'secondary'} className="uppercase">
              {club.status}
            </Badge>
            <Badge variant="outline" className="bg-black/50 text-white border-none">
              {club.internetSpeed} Mbps
            </Badge>
          </div>

          {/* Bottom Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{club.name}</h3>
            <p className="text-gray-200 text-sm mb-1">{club.location}</p>
            {club.neighborhood && (
              <p className="text-gray-300 text-xs mb-3">{club.neighborhood}</p>
            )}
            
            <div className="flex justify-between items-end">
              <div className="flex gap-2">
                {club.amenities.slice(0, 4).map((amenity) => {
                  const Icon = amenityIcons[amenity];
                  return Icon ? <Icon key={amenity} className="h-4 w-4 text-white" /> : null;
                })}
              </div>
              <p className="text-white font-medium">
                ${(club.price).toLocaleString()}/year
              </p>
            </div>
          </div>
        </div>

        {/* Featured Indicator */}
        {club.featured && (
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500" />
        )}
      </div>
    </Card>
  );
}