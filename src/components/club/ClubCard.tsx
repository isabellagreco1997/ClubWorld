import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Club } from '@/types/club';
import { formatCurrency } from '@/lib/utils/currency';
import { ClubFacilities } from './ClubFacilities';
import { ClubImages } from './ClubImages';
import { ClubMembership } from './ClubMembership';

interface ClubCardProps {
  club: Club;
}

export function ClubCard({ club }: ClubCardProps) {
  const mainImage = club.pictures.find(pic => pic.category === 'exterior') || club.pictures[0];

  return (
    <Card className="group overflow-hidden rounded-xl transition-all hover:shadow-lg">
      <div className="relative">
        <ClubImages mainImage={mainImage} />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <Badge variant="default" className="bg-primary">
              Rank #{club.rank}
            </Badge>
            <Badge variant="outline" className="bg-black/50 text-white border-none">
              Est. {club.establishedYear}
            </Badge>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-1">{club.name}</h3>
            <p className="text-gray-200 text-sm mb-3">{club.city}</p>
            
            <div className="flex justify-between items-end">
              <ClubFacilities facilities={club.facilities} />
              <ClubMembership fees={club.membershipFees} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}