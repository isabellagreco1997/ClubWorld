import { Club } from '@/types/club';
import { traditionalClubs } from './traditional-clubs';

// Start with traditional clubs, we'll add more categories later
export const allClubs: Club[] = [
  ...traditionalClubs,
];