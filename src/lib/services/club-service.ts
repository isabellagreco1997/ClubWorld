import { supabase } from '../supabase/client';
import { Club } from '@/types/club';

export async function fetchTraditionalClubs(): Promise<Club[]> {
  const { data, error } = await supabase
    .from('traditional_clubs')
    .select('*')
    .order('rank', { ascending: true });

  if (error) {
    console.error('Error fetching traditional clubs:', error);
    throw error;
  }

  return data.map(club => ({
    id: club.id,
    rank: club.rank,
    name: club.name,
    city: club.city,
    establishedYear: club.established_year,
    membershipFees: club.membership_fees as Club['membershipFees'],
    membershipRequirements: club.membership_requirements as Club['membershipRequirements'],
    clubType: club.club_type,
    facilities: club.facilities as Club['facilities'],
    pictures: club.pictures as Club['pictures']
  }));
}

export async function createTraditionalClub(club: Omit<Club, 'id'>): Promise<Club> {
  const { data, error } = await supabase
    .from('traditional_clubs')
    .insert([{
      rank: club.rank,
      name: club.name,
      city: club.city,
      established_year: club.establishedYear,
      membership_fees: club.membershipFees,
      membership_requirements: club.membershipRequirements,
      club_type: club.clubType,
      facilities: club.facilities,
      pictures: club.pictures
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating traditional club:', error);
    throw error;
  }

  return {
    id: data.id,
    rank: data.rank,
    name: data.name,
    city: data.city,
    establishedYear: data.established_year,
    membershipFees: data.membership_fees,
    membershipRequirements: data.membership_requirements,
    clubType: data.club_type,
    facilities: data.facilities,
    pictures: data.pictures
  };
}

export async function updateTraditionalClub(id: number, updates: Partial<Club>): Promise<void> {
  const { error } = await supabase
    .from('traditional_clubs')
    .update({
      rank: updates.rank,
      name: updates.name,
      city: updates.city,
      established_year: updates.establishedYear,
      membership_fees: updates.membershipFees,
      membership_requirements: updates.membershipRequirements,
      club_type: updates.clubType,
      facilities: updates.facilities,
      pictures: updates.pictures,
      updated_at: new Date().toISOString()
    })
    .eq('id', id);

  if (error) {
    console.error('Error updating traditional club:', error);
    throw error;
  }
}