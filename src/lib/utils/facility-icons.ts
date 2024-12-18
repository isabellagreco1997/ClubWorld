import { 
  Utensils, 
  Book, 
  Gamepad,
  Waves,
  Dumbbell, 
  Wine, 
  Coffee,
  Bed,
  Users,
  Music,
  Library,
  ChefHat,
  Glasses,
  Piano,
  Swords, // Use Swords for sports/tennis
} from 'lucide-react';
import { FacilityCategories } from '../constants/facility-categories';

// Facility icon mapping organized by category
const facilityIconMap = {
  [FacilityCategories.DINING]: {
    'Dining Room': Utensils,
    'Restaurant': ChefHat,
    'Bar': Wine,
    'Coffee Lounge': Coffee,
  },
  
  [FacilityCategories.RECREATION]: {
    'Card Room': Gamepad,
    'Billiards Room': Glasses,
    'Swimming Pool': Waves,
    'Tennis Court': Swords,
    'Gym': Dumbbell,
    'Sports Facility': Dumbbell,
  },
  
  [FacilityCategories.STUDY]: {
    'Library': Library,
    'Reading Room': Book,
    'Study Room': Book,
  },
  
  [FacilityCategories.ACCOMMODATION]: {
    'Guest Rooms': Bed,
    'Meeting Rooms': Users,
    'Function Room': Users,
  },
  
  [FacilityCategories.CULTURE]: {
    'Gallery': Music,
    'Theatre': Music,
    'Music Room': Piano,
  }
} as const;

export function getFacilityIcon(facilityName: string) {
  const normalizedName = facilityName.toLowerCase();
  
  // Search through all categories
  for (const category of Object.values(FacilityCategories)) {
    const categoryIcons = facilityIconMap[category];
    
    // Try exact match first
    for (const [key, icon] of Object.entries(categoryIcons)) {
      if (key.toLowerCase() === normalizedName) {
        return icon;
      }
    }
    
    // Try partial match if no exact match found
    for (const [key, icon] of Object.entries(categoryIcons)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return icon;
      }
    }
  }

  // Default fallback
  return Users;
}

export function getFacilityCategory(facilityName: string): string {
  const normalizedName = facilityName.toLowerCase();
  
  for (const [category, icons] of Object.entries(facilityIconMap)) {
    for (const key of Object.keys(icons)) {
      if (normalizedName.includes(key.toLowerCase())) {
        return category;
      }
    }
  }
  
  return FacilityCategories.ACCOMMODATION;
}