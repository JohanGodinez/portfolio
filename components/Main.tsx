import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-emerald-500">Johan</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front-end web developer specializing in building exceptional
            digital experiences. I'm focused on building responsive front-end
            web applications
          </p>
          <div className="flex items-center justify-between max-w-[450px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300">
              <FaLinkedinIn size={25} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300">
              <FaGithub size={25} />
            </div>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300">
                <AiOutlineMail size={25} />
              </div>
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-8 cursor-pointer hover:scale-110  ease-in duration-300">
              <BsFillPersonLinesFill size={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
