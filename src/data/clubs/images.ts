import { ClubImage } from '@/types/club';

// Organized by category for better maintainability
export const clubImages: Record<string, ClubImage[]> = {
  metropolitan: [
    {
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200",
      alt: "Metropolitan Club grand entrance",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1200",
      alt: "Metropolitan Club dining hall",
      category: "interior"
    }
  ],
  pacificUnion: [
    {
      url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200",
      alt: "Pacific-Union Club facade",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1615972736613-f0ad6a76b278?q=80&w=1200",
      alt: "Pacific-Union Club library",
      category: "interior"
    }
  ],
  athenaeum: [
    {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
      alt: "Athenaeum Club building",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?q=80&w=1200",
      alt: "Athenaeum Club reading room",
      category: "interior"
    }
  ],
  melbourne: [
    {
      url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200",
      alt: "Melbourne Club historic facade",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1574691250077-03a929faece5?q=80&w=1200",
      alt: "Melbourne Club wine cellar",
      category: "interior"
    }
  ],
  tokyo: [
    {
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=1200",
      alt: "Tokyo Club modern exterior",
      category: "exterior"
    },
    {
      url: "https://images.unsplash.com/photo-1503640538573-148065ba4904?q=80&w=1200",
      alt: "Tokyo Club tea ceremony room",
      category: "interior"
    }
  ]
};