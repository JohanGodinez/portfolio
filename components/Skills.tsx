import React from "react";
import Image from "next/image";
import { CardSkill } from './molecules'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-emerald-500">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardSkill image="/../public/img/skills/html.png" title="HTML" />
          <CardSkill image="/../public/img/skills/css.png" title="CSS" />
          <CardSkill
            image="/../public/img/skills/javascript.png"
            title="JavaScript"
          />
          <CardSkill image="/../public/img/skills/react.png" title="React" />
          <CardSkill image="/../public/img/skills/nextjs.png" title="Next Js" />
          <CardSkill
            image="/../public/img/skills/node.png"
            title="Node Js"
          />
          <CardSkill image="/../public/img/skills/aws.png" title="AWS" />
          <CardSkill image="/../public/img/skills/docker.png" title="Docker" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
