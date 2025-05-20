import { ReactNode } from "react";

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

export interface IFilterTab {
  text?: string;
  onClick: () => void;
  icon?: ReactNode
}

export interface IItem {
  id: string;
  text: string;
  icon: ReactNode;
  href: string;
}