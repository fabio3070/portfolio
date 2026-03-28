import { Button } from '@/components/ui/button'
import { SectionIds } from '@/lib/constants'

export default function Intro() {
  return (
    <section id={SectionIds.Main} className='min-h-screen flex flex-col justify-end pb-32'>
        <h1 className="text-5xl">Hello, I&apos;m Fábio</h1>
        <h2 className="text-2xl text-neutral-800">Web Developer</h2>
        <div className="h-2 bg-green-eletric-500 w-38 mt-4"></div>
        <div className="flex w-full items-end justify-between mt-12">
        <p className="text-body-text max-w-prose">
          I build web apps with JavaScript, mainly React and Next.js. I care about solid architecture, fast
          performance, and clean code. Lately I&apos;ve been learning how to use AI in frontend work and
          serverless tools to build full-stack features.
        </p>
        <Button variant={"link"}>Dark mode</Button>
        </div>
    </section>
  )
}
