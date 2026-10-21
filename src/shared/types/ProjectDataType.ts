export type ProjectDataType = {
  id: number;
  image: string;
  name: string;
  date: string;
  description: string;
  stack: string[];
  github?: string;
  demo: string;
  story?: string;
  keyContributions?: { title: string; task: string }[];
  disclaimer?: string;
};
