import React from "react";
import { CardSkill } from './molecules'
import HtmlImage from '../public/img/skills/html.png'
import CssImage from "../public/img/skills/css.png";
import JSImage from '../public/img/skills/javascript.png';
import ReactImage from '../public/img/skills/react.png';
import NextImage from '../public/img/skills/nextjs.png';
import NodeImage from '../public/img/skills/node.png';
import AWSImage from '../public/img/skills/aws.png';
import DockerImage from '../public/img/skills/docker.png';
import { useTranslation } from "react-i18next";


const Skills = () => {
  const [t, i18n] = useTranslation("global");
  
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-500">
          {t("skills.subtitle1")}
        </p>
        <h2 className="py-4">{t("skills.what")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardSkill image={HtmlImage} title="HTML" />
          <CardSkill image={CssImage} title="CSS" />
          <CardSkill image={JSImage} title="JavaScript" />
          <CardSkill image={ReactImage} title="React" />
          <CardSkill image={NextImage} title="Next Js" />
          <CardSkill image={NodeImage} title="Node Js" />
          <CardSkill image={AWSImage} title="AWS" />
          <CardSkill image={DockerImage} title="Docker" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
