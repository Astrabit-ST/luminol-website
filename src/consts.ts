export const WEBSITE_ROOT = "https://luminol.dev";
export const NEWS_ROOT = "https://raw.githubusercontent.com/Astrabit-ST/luminol-news/main";

export type PostEntry = {
  title: string;
  timestamp: number;
  thumbnail?: string;
  tags: string[];
};
