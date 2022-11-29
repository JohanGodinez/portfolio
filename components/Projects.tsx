import React from 'react'
import projectGoloyalty from '../public/img/projects/goloyalty.png'
import { ProjectItem } from './molecules/project-item'

const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-12">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-emerald-500">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="GoLoyalty"
            lenguaje="Angular - .Net Core"
            image={projectGoloyalty}
          />
          <ProjectItem
            title="GoLoyalty"
            lenguaje="Angular - .Net Core"
            image={projectGoloyalty}
          />
          <ProjectItem
            title="GoLoyalty"
            lenguaje="Angular - .Net Core"
            image={projectGoloyalty}
          />
          <ProjectItem
            title="GoLoyalty"
            lenguaje="Angular - .Net Core"
            image={projectGoloyalty}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects