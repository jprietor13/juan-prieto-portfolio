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

export const About = () => {
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
          <h1>Sobre Mi</h1>
          <p>
            Soy Ingeniero de Sistemas con más de 10 años de experiencia en
            desarrollo de software, bases de datos y sistemas, enfocado en
            ecommerce, logística, educación y servicio al cliente. He trabajado
            en empresas como Grupo Éxito, VTEX y WAHHU. Actualmente soy
            freelance y estudio inglés intensivamente. Apasionado por la
            tecnología, la lectura, los videojuegos y el ciclismo.
          </p>
        </section>
        <section className="experience-container">
          <h1>Experiencia Laboral</h1>
          <article className="experience">
            <div className="experience-header">
              <h2>Pausa profesional</h2>
              <h3>Noviembre 2024 - Actualidad</h3>
            </div>
            <div className="experience-description">
              <p>
                Me dedico a fortalecer mis habilidades técnicas y lingüísticas
                mediante estudio autodirigido, trabajo freelance y proyectos
                personales usando React.js y Node.js. Estudio inglés (nivel
                básico-intermedio) en la academia Smart Online.
              </p>
            </div>
          </article>
          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>Grupo Éxito</h2>
                <span>Frontend Developer</span>
              </div>
              <h3>Mayo 2022 - Octubre 2024</h3>
            </div>
            <div className="experience-description">
              <p>
                Desarrollé componentes para tiendas e-commerce usando VTEX IO,
                FastStore, React y NextJS. Integré APIs REST y GraphQL,
                mejorando el rendimiento del frontend y la disponibilidad de
                datos.
              </p>
            </div>
          </article>
          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>VTEX</h2>
                <span>First Party App Engineer</span>
              </div>
              <h3>Marzo 2021 - Mayo 2022</h3>
            </div>
            <div className="experience-description">
              <p>
                Construí apps administrativas en VTEX IO (React, Node.js,
                NestJS). Personalicé tiendas y mejoré la usabilidad, integración
                de datos con GraphQL y tiempos de carga.
              </p>
            </div>
          </article>
          <article className="experience">
            <div className="experience-header">
              <div className="job-container">
                <h2>WAHHU (Riusoftbrand)</h2>
                <span>Frontend Developer</span>
              </div>

              <h3>Abril 2019 - Marzo 2021</h3>
            </div>
            <div className="experience-description">
              <p>
                Diseñé interfaces responsivas con jQuery, JavaScript, Twig y
                Tailwind. Gestioné landings en WordPress, mejorando contenido y
                conversión.
              </p>
            </div>
          </article>
        </section>
        <section className="education-container">
          <h1>Educación</h1>
          <div className="education-header">
            <div className="school-container">
              <h2>Smart, Academia de idiomas</h2>
              <span>Formación en idioma ingles (B1)</span>
            </div>
            <h3>Enero 2025 – Actualmente</h3>
          </div>
          <div className="education-header">
            <div className="school-container">
              <h2>Universidad de Cundinamarca</h2>
              <span>Ingeniero de Sistemas</span>
            </div>

            <h3>Agosto 2008 – marzo 2014</h3>
          </div>
        </section>
        <section className="certifications">
          <h1>Certificaciones</h1>
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
          <h1>Proyectos</h1>
          <div className="projects-grid">
            <article className="project-card">
              <a href="https://jprietor13.github.io/todo-list/" target="_blank">
                <h2>Todo list</h2>
              </a>
              <p>Aplicación tipo todo list (CRUD)</p>
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
              <p>Simulación de ficha medica de un paciente</p>
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
                <h2>Store availability</h2>
              </a>
              <p>Proyecto de practica sobre disponibilidad de tiendas</p>
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
                <h2>The movie DB</h2>
              </a>
              <p>Proyecto de practica para consumo de la api The movie DB</p>
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
                <h2>List of Artist</h2>
              </a>
              <p>Consumo API rest con información de grupos musicales</p>
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
