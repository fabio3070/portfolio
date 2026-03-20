import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { SectionIds } from '@/lib/constants'
import ProjectDetails from './ProjectDetails'
import { fetchProjects } from '@/lib/fetch-projects'

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <section id={SectionIds.Projects} className='min-h-screen flex flex-col justify-end'>
      <div>
        <h1 className="text-5xl">PROJECTS</h1>
        <div className="h-2 bg-pink-eletric-500 w-38 mt-4"></div>
          {projects.map((project) => (
          <div className="flex w-full items-end justify-between mt-12" key={project.id}>
            <div>
              <p className="text-body-text text-2xl font-bold mb-8">{project.name} - {project.dateRange}</p>
              <p className="text-body-text">{project.description}</p>
            </div>
            <ProjectDetails project={project}/>
          </div>
          ))}
      </div>
    </section>
  )
}
