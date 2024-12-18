import { clubImages } from '@/data/clubs/images';
import { ClubImage } from '@/types/club';

export function getClubImages(clubId: string): ClubImage[] {
  return clubImages[clubId] || [];
}

export function getMainImage(clubId: string): ClubImage | undefined {
  const images = getClubImages(clubId);
  return images.find(img => img.category === 'exterior') || images[0];
}