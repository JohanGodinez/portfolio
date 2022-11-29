import React from 'react'
import Image, { StaticImageData } from "next/image";

type CardSkillProps = {
  title: string
  image: StaticImageData
}

export const CardSkill = ({title, image}: CardSkillProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={image}
            alt="html"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
