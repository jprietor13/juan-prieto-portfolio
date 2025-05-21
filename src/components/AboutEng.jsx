import logo from "../assets/images/jp.png";
import jsFromFront from "../assets/images/js_for_frontend.png";
import masterReact from "../assets/images/master_react.png";
import reactExpert from "../assets/images/react_expert.png";
import frontReact from "../assets/images/front_react.png";
import fullStack from "../assets/images/fullstack_platzi.png";
import frontArch from "../assets/images/front_arch.png";
import { Habilities } from "./Habilities";

import {
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiBulma } from "react-icons/si";
import { ImEarth } from "react-icons/im";

import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { ImageWithZoom } from "./ImageWithZoom";
import { SelectLanguage } from "./SelectLanguage";

export const AboutEng = () => {
  return (
    <div className="layout">
      <header>
        <SelectLanguage />
        <div className="basic-info">
          <h1 className="title-name">Juan Prieto Rodríguez</h1>
          <div className="logo">
            <img src={logo} alt="juan_prieto" width={200} height={180} />
          </div>
          <h2>FullStack Developer (ReactJS - NodeJS)</h2>
          <span>
            <ImEarth /> Zipaquirá - Cundinamarca (COL)
          </span>
          <div className="links">
            <a href="mailto:jp1739@gmail.com">
              <CiMail size={35} title="Enviame un email para charlar" />
            </a>
            <a href="tel:+57313398202">
              <BsTelephone size={35} title="Llamame :)" />
            </a>
            <a
              href="https://wa.me/573133908202"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={35} title="Esribeme a mi Whatsapp" />
            </a>
            <a href="https://github.com/jprietor13" target="_blank">
              <FaGithub size={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-prieto-rodr%C3%ADguez-a3b29523/"
              target="_blank"
            >
              <FaLinkedin size={35} />
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className="about">
          <h1>About Me</h1>
          <p>
            I’m a Systems Engineer with over 10 years of experience in various
            fields such as software development, databases, and systems
            administration. I've focused on sectors like e-commerce, customer
            service, logistics, and education. I've worked for companies such as
            Grupo Éxito, VTEX, WAHHU, and UpwareSoft, among others. I'm an
            amateur cyclist, a lover of reading, technology, and video games.
            Currently, I'm working as a freelancer on independent projects and
            studying English intensively at the Smart language academy.
          </p>
        </section>

        <section className="experience-container">
          <h1>Work Experience</h1>

          <article className="experience">
            <div className="experience-header">
              <h2>Professional Break</h2>
              <h3>November 2024 - Present</h3>
            </div>
            <div className="experience-description">
              <p>
                Currently strengthening my technical, personal, and language
                skills through independent work, self-directed study, and
                personal projects using technologies such as React.js and
                Node.js. I collaborate as a freelancer improving projects and
                study English at Smart Online academy, with a basic-intermediate
                level.
              </p>
            </div>
          </article>

          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>Grupo Éxito</h2>
                <span>Frontend Developer</span>
              </div>
              <h3>May 2022 - October 2024</h3>
            </div>
            <div className="experience-description">
              <p>
                I developed and implemented components for e-commerce stores,
                optimizing their performance and integration with backend
                services built in Node.js. I built scalable and maintainable
                modules using VTEX IO, VTEX FastStore, ReactJS, and NextJS,
                ensuring a smooth frontend experience. I also integrated APIs
                using REST and GraphQL, improving data availability and UI
                performance.
              </p>
            </div>
          </article>

          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>VTEX</h2>
                <span>First Party App Engineer</span>
              </div>
              <h3>March 2021 - May 2022</h3>
            </div>
            <div className="experience-description">
              <p>
                I developed and maintained administrative apps on the VTEX IO
                platform, using ReactJS on the frontend and Node.js/NestJS on
                the backend, focusing on e-commerce management. I improved the
                user experience on e-commerce platforms, increasing usability
                and conversion rates. Additionally, I built and customized
                stores tailored to client needs and integrated data through
                GraphQL APIs, optimizing efficiency and load times.
              </p>
            </div>
          </article>

          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>WAHHU (Riusoftbrand)</h2>
                <span>Frontend Developer</span>
              </div>
              <h3>April 2019 - March 2021</h3>
            </div>
            <div className="experience-description">
              <p>
                I designed, developed, and maintained interactive views and
                modules for the WAHHU app, ensuring a smooth experience on both
                desktop and mobile. I optimized the user interface using jQuery,
                Vanilla JavaScript, CSS, SASS, HTML, and frameworks like
                Bootstrap, Twig, and Tailwind CSS. I also managed and updated
                landing pages on WordPress, improving their content and
                structure to optimize conversion and user experience.
              </p>
            </div>
          </article>
        </section>

        <section className="education-container">
          <h1>Education</h1>
          <div className="education-header">
            <div className="school-container">
              <h2>Smart, Language Academy</h2>
              <span>English Language Training (B1)</span>
            </div>
            <h3>January 2025 – Present</h3>
          </div>
          <div className="education-header">
            <div className="school-container">
              <h2>University of Cundinamarca</h2>
              <span>Systems Engineer</span>
            </div>
            <h3>August 2008 – March 2014</h3>
          </div>
        </section>

        <section className="certifications">
          <h1>Certifications</h1>
          <div className="certifications-grid">
            <ImageWithZoom src={jsFromFront} alt="js-for-frontend" />
            <ImageWithZoom src={masterReact} alt="master-react" />
            <ImageWithZoom src={reactExpert} alt="react-expert" />
            <ImageWithZoom src={frontReact} alt="front-react" />
            <ImageWithZoom src={fullStack} alt="full-stack" />
            <ImageWithZoom src={frontArch} alt="front-arch" />
          </div>
        </section>

        <Habilities />

        <section className="projects-container">
          <h1>Projects</h1>
          <div className="projects-grid">
            <article className="project-card">
              <a href="https://jprietor13.github.io/todo-list/" target="_blank">
                <h2>Todo List</h2>
              </a>
              <p>To-do list (CRUD) application</p>
              <span>
                <FaReact size={35} />
              </span>
              <span>
                <SiTypescript size={40} />
              </span>
              <span>
                <FaBootstrap size={40} />
              </span>
            </article>

            <article className="project-card">
              <a
                href="https://jprietor13.github.io/patient-card/"
                target="_blank"
              >
                <h2>Patient Card</h2>
              </a>
              <p>Simulation of a patient's medical record</p>
              <span>
                <FaReact size={40} />
              </span>
              <span>
                <SiTypescript size={40} />
              </span>
              <span>
                <SiBulma size={40} />
              </span>
            </article>

            <article className="project-card">
              <a
                href="https://jprietor13.github.io/store-availability/"
                target="_blank"
              >
                <h2>Store Availability</h2>
              </a>
              <p>Practice project on store availability</p>
              <span>
                <FaReact size={40} />
              </span>
              <span>
                <SiTypescript size={40} />
              </span>
              <span>
                <FaCss3Alt size={40} />
              </span>
            </article>

            <article className="project-card">
              <a href="https://movie-db-jp.vercel.app/" target="_blank">
                <h2>The Movie DB</h2>
              </a>
              <p>Practice project using The Movie DB API</p>
              <span>
                <FaReact size={40} />
              </span>
              <span>
                <SiTypescript size={40} />
              </span>
              <span>
                <FaCss3Alt size={40} />
              </span>
            </article>

            <article className="project-card">
              <a href="https://list-of-artists.vercel.app/" target="_blank">
                <h2>List of Artists</h2>
              </a>
              <p>REST API consumption with information about music bands</p>
              <span>
                <FaReact size={40} />
              </span>
              <span>
                <IoLogoJavascript size={40} />
              </span>
              <span>
                <FaCss3Alt size={40} />
              </span>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};
