import Image from "next/image";
import projectGoloyalty from "../public/img/projects/goloyalty.png";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Goloyalty = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={projectGoloyalty}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Go Loyalty</h2>
          <h3>Angular / Net Core / Docker</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>{t("goloyalty.overview")}</h2>
          <p className="py-2">{t("goloyalty.paragraph")}</p>
          <a
            href="https://go-loyalty.com/auth/login"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">{t("goloyalty.web")}</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">
              {t("goloyalty.technologies")}
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 px-4 flex items-center">
                Angular
              </p>
              <p className="text-gray-600 py-2 px-4 flex items-center">
                Nebular
              </p>
              <p className="text-gray-600 py-2 px-4 flex items-center">
                Firebase
              </p>
              <p className="text-gray-600 py-2 px-4 flex items-center">
                Docker / Digiatal Ocean
              </p>
              <p className="text-gray-600 py-2 px-4 flex items-center">
                .Net Core
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <div className="">
            <div className="rounded-full w-16 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 hover:text-emerald-500">
              <FiArrowLeft />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Goloyalty;
