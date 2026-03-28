"use server"

import Projects from "./_components/projects/Projects"
import Intro from "./_components/Intro"
import Work from "./_components/work/Work"

export default async function Main() {
  
  return (
    <div className="mb-8">
      <Intro />
      <Projects />
      <Work />
    </div>
  )
}
