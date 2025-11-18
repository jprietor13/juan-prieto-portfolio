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
  FaDatabase,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiBulma, SiNestjs } from "react-icons/si";
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
            <a href="tel:+573133908202">
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
            I'm Systems Engineer with over 10 years of experience in software
            development, databases, and systems administration, focused on
            e-commerce, logistics, education, and customer service. I've worked
            at companies like FLiPO Eyewear, Grupo Éxito, VTEX, and WAHHU. Currently working as
            a freelancer and studying English intensively. Passionate about
            technology, reading, video games, and cycling.
          </p>
        </section>

        <section className="experience-container">
          <h1>Work Experience</h1>

          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>FLiPO Eyewear</h2>
                <span>FullStack Developer</span>
              </div>
              <h3>June 2025 - October 2025</h3>
            </div>
            <div className="experience-description">
              <p>
                Develop new features, integrations, and improvements to the
                backend, frontend, and cloud services. Working with VanillaJS
                scripts, SQL queries, and module development for Flipo's ERP,
                using NestJS (Node.js, MySQL) on the backend and React
                (TypeScript) on the frontend. Implementing design patterns and
                best practices in software architecture.{" "}
              </p>
            </div>
          </article>
          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>Freelance</h2>
                <span>Freelance Software Developer</span>
              </div>
              <h3>October 2024 - Present</h3>
            </div>
            <div className="experience-description">
              <p>
                Development of web applications and RESTful APIs with React,
                Node.js, Express, and NestJS. Use of TypeScript, MySQL, and
                MongoDB with a focus on scalability, maintainability, and
                application of SOLID principles and common JS/TS design
                patterns.{" "}
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
                I developed components for e-commerce stores using VTEX IO,
                FastStore, React, and NextJS. I integrated REST APIs and
                GraphQL, improving frontend performance and data availability. I
                applied design patterns such as Builder and Observer to enhance
                code extensibility.{" "}
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
                I built administrative apps in VTEX IO (React, Node.js, NestJS).
                I customized stores and improved usability, data integration
                with GraphQL, and loading times.{" "}
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
                I designed responsive interfaces using jQuery, JavaScript, Twig,
                and Tailwind. I managed WordPress landing pages, improving
                content and conversion rates. I applied design patterns such as
                the Factory Method and Abstract Factory to reusable components.{" "}
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
              <a
                href="https://the-new-burguer-station-front.vercel.app/#/login"
                target="_blank"
              >
                <h2>The New Burguer Station</h2>
              </a>
              <p>App to order your burguer to your home</p>
              <span>
                <FaReact size={35} />
              </span>
              <span>
                <SiNestjs size={35} />
              </span>
              <span>
                <FaDatabase size={35} />
              </span>
            </article>

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
