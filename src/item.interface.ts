export interface Item {
  title: string;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending?: {
      large: string;
      small: string;
    };
  };
  isBookmarked: boolean;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
}