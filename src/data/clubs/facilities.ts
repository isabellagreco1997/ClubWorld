import { ClubFacility } from '@/types/club';

export const clubFacilities: Record<string, ClubFacility[]> = {
  metropolitan: [
    {
      name: "Dining Room",
      description: "Formal dining room with city views",
      isAvailable: true
    },
    {
      name: "Library",
      description: "Classic wood-paneled library",
      isAvailable: true
    },
    {
      name: "Meeting Rooms",
      description: "Private meeting spaces",
      isAvailable: true
    }
  ],
  pacificUnion: [
    {
      name: "Dining Room",
      description: "Bay view dining room",
      isAvailable: true
    },
    {
      name: "Card Room",
      description: "Traditional card room",
      isAvailable: true
    },
    {
      name: "Library",
      description: "Historic library collection",
      isAvailable: true
    }
  ],
  // Add more facilities for other clubs...
};