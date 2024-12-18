import { Club } from '@/types/club';

interface SupabaseClub {
  id: number;
  rank: number;
  name: string;
  city: string;
  establishedyear: number;
  membershipfees: {
    annual: number;
    joiningFee?: number;
    currency: string;
  };
  membershiprequirements: {
    age?: string;
    referrals?: number;
    otherCriteria?: string[];
  };
  clubtype: string[];
  facilities: {
    name: string;
    description: string;
    isAvailable: boolean;
  }[];
  pictures: {
    url: string;
    alt: string;
    category: string;
  }[];
}

export function mapSupabaseClubToModel(data: SupabaseClub): Club {
  return {
    id: data.id,
    rank: data.rank,
    name: data.name,
    city: data.city,
    establishedYear: data.establishedyear,
    membershipFees: {
      annual: data.membershipfees.annual,
      joiningFee: data.membershipfees.joiningFee,
      currency: data.membershipfees.currency
    },
    membershipRequirements: {
      age: data.membershiprequirements.age,
      referrals: data.membershiprequirements.referrals,
      otherCriteria: data.membershiprequirements.otherCriteria
    },
    clubType: data.clubtype,
    facilities: data.facilities.map(facility => ({
      name: facility.name,
      description: facility.description,
      isAvailable: facility.isAvailable
    })),
    pictures: data.pictures.map(picture => ({
      url: picture.url || 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200', // Fallback image
      alt: picture.alt || 'Club image',
      category: (picture.category || 'exterior') as 'exterior' | 'interior' | 'facilities' | 'events'
    }))
  };
}