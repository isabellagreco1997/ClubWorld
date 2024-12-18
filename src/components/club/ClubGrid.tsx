import { Club } from '@/types';
import { ClubCard } from './ClubCard';

interface ClubGridProps {
  clubs: Club[];
}

export function ClubGrid({ clubs }: ClubGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {clubs.map((club) => (
        <ClubCard key={club.id} club={club} />
      ))}
    </div>
  );
}