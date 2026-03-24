export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export const initialPortfolio: PortfolioItem[] = [
  {
    id: '0',
    title: 'Green Care Naturals Commercial',
    category: 'Commercial',
    thumbnail: 'https://picsum.photos/seed/greencare/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '1',
    title: 'Cinematic Wedding Film',
    category: 'Wedding',
    thumbnail: 'https://picsum.photos/seed/wedding/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '2',
    title: 'Brand Story: Tech Startup',
    category: 'Commercial',
    thumbnail: 'https://picsum.photos/seed/tech/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '3',
    title: 'Music Video: Urban Beats',
    category: 'Music',
    thumbnail: 'https://picsum.photos/seed/music/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: '4',
    title: 'Documentary: Addis Streets',
    category: 'Documentary',
    thumbnail: 'https://picsum.photos/seed/addis/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];
