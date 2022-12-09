import React from 'react'
import Image from 'next/image'
import banner from "../public/img/about.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-emerald-500">
            {t("about.subtitle1")}
          </p>
          <h2 className="py-4">{t("about.who")}</h2>
          <p className="py-2 text-gray-600">{t("about.subtitle2")}</p>
          <p className="py-2 text-gray-600">{t("about.paragraph1")}</p>
          <p className="py-2 text-gray-600">{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={banner}
            alt="image-programing"
            width={500}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default About