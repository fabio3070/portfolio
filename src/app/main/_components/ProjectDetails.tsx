import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Project } from '@/lib/fetch-projects'
import Image from 'next/image'

function ProjectDetails({ project }: { project: Project }) {
    return (
        <Drawer direction="right">
            <DrawerTrigger>
                More Info
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-5xl">
                    <DrawerTitle>{project.name}</DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                    <section>
                        <Image src={project.image} alt={project.name} width={100} height={100} />
                    </section>
                    <section>
                        <p className="text-body-text">{project.description}</p>
                    </section>
                    <section>
                        <div className='mt-4'>
                            <label>Functions and responsabilities</label>
                            <p className="text-body-text">{project.functions}</p>
                        </ div>
                        <div className='mt-4'>
                            <label>Tech stack</label>
                            <p className="text-body-text">{project.techStack.join(', ')}</p>
                        </div>
                        <p className="text-body-text">{project.link}</p>
                    </section>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

export default ProjectDetails