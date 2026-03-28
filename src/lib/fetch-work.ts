import projects from '@/public/projects.json';

export type Work = {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    link: string;
};

export async function fetchWorks(): Promise<Work[]> {
  return projects.work as Work[];
}