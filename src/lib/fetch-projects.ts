import projects from '@/public/projects.json';

export type Project = {
    id: string;
    name: string;
    dateRange: string;
    description: string;
    functions: string;
    techStack: string[];
    image: string;
    link: string;
};

export async function fetchProjects(): Promise<Project[]> {
  return projects.projects as Project[];
}