import { SectionIds } from '@/lib/constants'
import ProjectDetails from '../projects/ProjectDetails'
import { fetchProjects } from '@/lib/fetch-projects'
import { WorkCarousel } from './WorkCarousel';

export default async function Work() {
  const projects = await fetchProjects();

  return (
    <section id={SectionIds.Work}>
      <div>
        <h1 className="text-5xl">WORK</h1>
        <div className="h-2 bg-pink-eletric-500 w-38 mt-4 mb-8"></div>
        <WorkCarousel />
      </div>
    </section>
  )
}
