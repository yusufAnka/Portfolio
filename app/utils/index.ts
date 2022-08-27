export const apiEndPoint = process.env.NEXT_PUBLIC_PROXY_URL;

export interface IPortfolio {
  buildDate: string;
  category: string;
  comments?: string[];
  description: string;
  img: string;
  liveDemo: string;
  name: string;
  reactBy: string[];
  technology: string[];
  __v: number;
  _id: string;
}

export interface IBlog {
  category: string;
  content: string;
  date: Date;
  description: string;
  id: string;
  thumbnail: string;
  title: string;
}

export interface ITestimonial {
  img: string;
  name: string;
  title: string;
  review: string;
}
