import type { Section } from "./types";

export type Feed = {
  id: string;
  name: string;
  url: string;
  section: Section;
};

export const FEEDS: Feed[] = [
  { id: "bbc-thai", name: "BBC Thai", url: "https://feeds.bbci.co.uk/thai/rss.xml", section: "thai" },
  { id: "the-standard", name: "The Standard", url: "https://thestandard.co/feed/", section: "thai" },
  { id: "thairath", name: "ไทยรัฐ", url: "https://www.thairath.co.th/rss/news", section: "thai" },
  { id: "bbc-world", name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", section: "world" },
  { id: "bbc-asia", name: "BBC Asia", url: "https://feeds.bbci.co.uk/news/world/asia/rss.xml", section: "world" },
  { id: "guardian-world", name: "The Guardian", url: "https://www.theguardian.com/world/rss", section: "world" },
  { id: "aljazeera", name: "Al Jazeera", url: "https://www.aljazeera.com/xml/rss/all.xml", section: "world" },
  { id: "bbc-tech", name: "BBC Tech", url: "https://feeds.bbci.co.uk/news/technology/rss.xml", section: "tech" },
  { id: "guardian-tech", name: "The Guardian", url: "https://www.theguardian.com/uk/technology/rss", section: "tech" },
  { id: "hn", name: "Hacker News", url: "https://hnrss.org/frontpage", section: "tech" },
  { id: "bbc-biz", name: "BBC Business", url: "https://feeds.bbci.co.uk/news/business/rss.xml", section: "business" },
  { id: "bbc-sport", name: "BBC Sport", url: "https://feeds.bbci.co.uk/sport/rss.xml", section: "sport" },
  { id: "guardian-sport", name: "The Guardian", url: "https://www.theguardian.com/uk/sport/rss", section: "sport" },
  { id: "bbc-arts", name: "BBC Culture", url: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml", section: "culture" },
  { id: "bbc-sci", name: "BBC Science", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml", section: "science" },
];
