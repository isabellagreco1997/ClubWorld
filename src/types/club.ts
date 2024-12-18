export interface ClubImage {
  url: string;
  alt: string;
  category: 'exterior' | 'interior' | 'facilities' | 'events';
}

export interface ClubFacility {
  name: string;
  description: string;
  isAvailable: boolean;
}

export interface ClubMembershipFees {
  annual: number;
  joiningFee?: number;
  currency: string;
}

export interface ClubMembershipRequirements {
  age?: string;
  referrals?: number;
  otherCriteria?: string[];
}

export interface Club {
  id: number;
  rank: number;
  name: string;
  city: string;
  establishedYear: number;
  membershipFees: ClubMembershipFees;
  membershipRequirements: ClubMembershipRequirements;
  clubType: string[];
  facilities: ClubFacility[];
  pictures: ClubImage[];
}