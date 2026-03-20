"use server"

import Projects from "./_components/Projects"
import Intro from "./_components/Intro"

export default async function Main() {
  
  return (
    <div className="mb-8">
      <Intro />
      <Projects />
    </div>
  )
}
