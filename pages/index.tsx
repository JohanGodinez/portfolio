import Head from "next/head";
import Main from "../components/Main"
import About from "../components/About"
import Skills from '../components/Skills'
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Portfolio | Front-End Developer</title>
        <meta name="portfolio" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
