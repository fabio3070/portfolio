import { SectionIds } from '@/lib/constants'
import ProjectDetails from './ProjectDetails'
import { fetchProjects } from '@/lib/fetch-projects'
import { ArrowUpFromDot } from 'lucide-react';

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <section id={SectionIds.Projects} className='bg-white min-h-screen rounded-3xl flex flex-col justify-end p-8'>
      <div>
        <h1 className="text-xl">PROJECTS</h1>
        <div className="h-2 bg-pink-eletric-500 w-38 mt-2"></div>
        <section className='mt-8'>
          {projects.map((project, index) => (
            <>
              <div
                className="mt-6 flex w-full items-end justify-between rounded-xl border border-black/[0.06] bg-[var(--neutral-100)] p-6 md:p-8"
                key={project.id}
              >
                <div>
                  <p className="text-body-text text-2xl font-bold mb-8">{project.name} - {project.dateRange}</p>
                  <p className="text-body-text">{project.description}</p>
                </div>
                <ProjectDetails project={project}/>
              </div>
              {index + 1 !== projects.length && 
                <div className="mt-6 flex justify-center">
                  <ArrowUpFromDot
                    size={18}
                    strokeWidth={1.75}
                    className="text-neutral-400"
                  />
                </div>
              }
            </>
          ))}
        </section>
      </div>
    </section>
  )
}
