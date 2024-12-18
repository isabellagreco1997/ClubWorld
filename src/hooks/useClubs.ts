import { useEffect, useState } from 'react';
import { fetchClubs } from '@/lib/supabase/api';
import { Club } from '@/types/club';

export function useClubs() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadClubs() {
      try {
        const data = await fetchClubs();
        setClubs(data);
      } catch (e) {
        setError(e instanceof Error ? e : new Error('Failed to fetch clubs'));
      } finally {
        setLoading(false);
      }
    }

    loadClubs();
  }, []);

  return { clubs, loading, error };
}