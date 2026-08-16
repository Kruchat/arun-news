export const SECTIONS = [
  "thai",
  "world",
  "tech",
  "business",
  "sport",
  "culture",
  "science",
] as const;

export type Section = (typeof SECTIONS)[number];

export type Story = {
  id: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  url: string;
  imageUrl: string | null;
  source: string;
  sourceId: string;
  section: Section;
  publishedAt: string;
  author: string | null;
};

export type NewsBundle = {
  stories: Story[];
  fetchedAt: string;
  sourcesOk: number;
  sourcesTried: number;
};
