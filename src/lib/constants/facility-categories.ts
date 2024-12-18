export const FacilityCategories = {
  DINING: 'dining',
  RECREATION: 'recreation',
  STUDY: 'study',
  ACCOMMODATION: 'accommodation',
  CULTURE: 'culture'
} as const;

export type FacilityCategory = keyof typeof FacilityCategories;