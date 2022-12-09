import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Main = () => {
  
  const [t, i18n] = useTranslation("global");

  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {t("main.subtitle1")}
          </p>
          <h1 className="py-4 text-gray-700">
            {t("main.hi")}{" "}
            <span className="text-emerald-500">{t("main.name")}</span>
          </h1>
          <h1 className="py-4 text-gray-700">{t("main.frontend")}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {t("main.subtitle2")}
          </p>
          <div className="flex items-center justify-between max-w-[450px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/johan-godinez-2a7b24175/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300 hover:text-emerald-500">
                <FaLinkedinIn size={25} />
              </div>
            </a>
            <a
              href="https://github.com/johangodinez"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300 hover:text-emerald-500">
                <FaGithub size={25} />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300 hover:text-emerald-500">
                <AiOutlineMail size={25} />
              </div>
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300 hover:text-emerald-500">
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
