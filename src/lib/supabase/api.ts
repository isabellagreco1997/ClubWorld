import { supabase } from './client';
import { Club } from '@/types/club';
import { mapSupabaseClubToModel } from '../utils/club-mapper';

export async function fetchClubs(): Promise<Club[]> {
  const { data, error } = await supabase
    .from('clubs')
    .select('*')
    .order('rank', { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch clubs: ${error.message}`);
  }

  return (data || []).map(mapSupabaseClubToModel);
}

export async function createClub(club: Omit<Club, 'id'>) {
  const { data, error } = await supabase
    .from('clubs')
    .insert([club])
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create club: ${error.message}`);
  }

  return mapSupabaseClubToModel(data);
}

export async function updateClub(id: number, updates: Partial<Club>) {
  const { error } = await supabase
    .from('clubs')
    .update(updates)
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to update club: ${error.message}`);
  }
}

export async function deleteClub(id: number) {
  const { error } = await supabase
    .from('clubs')
    .delete()
    .eq('id', id);

  if (error) {
    throw new Error(`Failed to delete club: ${error.message}`);
  }
}