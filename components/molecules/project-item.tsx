import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectItemProps = {
  image: StaticImageData;
  title: string;
  lenguaje: string;
  url: string;
};

export const ProjectItem = ({ image, title, lenguaje, url }: ProjectItemProps) => {
  return (
    <div className="relative flex item-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-emerald-600 to-emerald-400">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{lenguaje}</p>
        <Link href={url}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};
