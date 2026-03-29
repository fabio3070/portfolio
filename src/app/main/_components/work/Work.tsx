import { SectionIds } from '@/lib/constants'
import ProjectDetails from '../projects/ProjectDetails'
import { fetchProjects } from '@/lib/fetch-projects'
import { WorkCarousel } from './WorkCarousel';

export default async function Work() {
  const projects = await fetchProjects();

  return (
    <section id={SectionIds.Work} className='mt-16'>
      <div>
        <h1 className="text-3xl">WORK</h1>
        <div className="h-2 bg-pink-eletric-500 w-38 mt-2 mb-8"></div>
        <WorkCarousel />
      </div>
    </section>
  )
}
