import { t } from 'i18next';
import React from 'react'
import { useTranslation } from 'react-i18next';
import projectGoloyalty from '../public/img/projects/goloyalty.png'
import projectQuiniela from "../public/img/projects/quiniela.png";
import { ProjectItem } from './molecules/project-item'

const Projects = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div id="projects" className="w-full lg:h-screen p-12">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-emerald-500">
          {t("projects.subtitle1")}
        </p>
        <h2 className="py-4">{t("projects.what")}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="GoLoyalty"
            lenguaje="Angular - .Net Core"
            image={projectGoloyalty}
            url="/goloyalty"
          />
          <ProjectItem
            title="Quiniela"
            lenguaje="Next Js - .Net Core"
            image={projectQuiniela}
            url="/quiniela"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects