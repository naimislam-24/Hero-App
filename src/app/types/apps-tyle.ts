export interface IApp {
  image: string;
  title: string;
  companyName: string;
  id: number;
  description: string;
  size: number;
  reviews: string;
  ratingAvg: number;
  downloads: string;
}
export interface IRating {
  name: string;
  count: number;
}
