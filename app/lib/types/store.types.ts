export interface IGame {
  id: number;
  title: string;
  bannerUrl: string;
  videoUrl: string;
  tags: string[];
  description: string;
  basePrice: number;
  isOnSale: boolean;
  salePercentage: number;
  saleEndDate: number | null;
  dateAdded: number;
}