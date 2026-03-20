import { Button } from '@/components/ui/button'
import { SectionIds } from '@/lib/constants'

export default function Intro() {
  return (
    <section id={SectionIds.Main} className='min-h-screen flex flex-col justify-end pb-8'>
        <h1 className="text-5xl">Hello, I&apos;m Fábio</h1>
        <div className="h-2 bg-green-eletric-500 w-38 mt-4"></div>
        <div className="flex w-full items-end justify-between mt-12">
        <p className="text-body-text w-100">I am a web developer, focusing in website interaction, user interfaces and scallable applications.</p>
        <Button variant={"link"}>Dark mode</Button>
        </div>
    </section>
  )
}
