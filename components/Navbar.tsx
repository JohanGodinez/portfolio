import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [t, i18n] = useTranslation("global");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#e5e7eb]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 text-emerald-600">
        <Link href="/">
          <h2>JG</h2>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                {t("navbar.home")}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                {t("navbar.about")}
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                {t("navbar.skills")}
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                {t("navbar.projects")}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b font-bold">
                {t("navbar.contact")}
              </li>
            </Link>
            <li className="ml-10 text-sm uppercase hover:border-b font-bold">
              {
                i18n.language === 'es' ?
                <div className="curso-pointer" onClick={() => i18n.changeLanguage("en")}>EN</div>
                :
                <div className="curso-pointer" onClick={() => i18n.changeLanguage("es")}>ES</div>
              }
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <h1 className="text-emerald-500">JG</h1>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let s build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  {t("navbar.home")}
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  {t("navbar.about")}
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  {t("navbar.skills")}
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  {t("navbar.projects")}
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm font-bold"
                >
                  {t("navbar.contact")}
                </li>
              </Link>
              <li></li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-emerald-500">
                Let s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <Link href="/#contact">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
