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
            diferentes campos como desarrollo de software, bases de datos y
            administración de sistemas. Enfocado en sectores de ecommerce,
            servicio al cliente, logística y educación. He trabajado en empresas
            como Grupo Éxito, VTEX, WAHHU, UpwareSoft entre otras. Soy ciclista
            aficionado, amante de la lectura, la cocina y la vida sana.
            Actualmente me encuentro trabajando como freelance en proyectos
            independientes y estudiando ingles intensivamente en la academia de
            idiomas Smart.
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
                Actualmente fortalezco mis habilidades técnicas, personales y
                lingüísticas mediante trabajo independiente, estudio
                autodirigido y proyectos personales con tecnologías como
                React.js y Node.js. Colaboro como freelancer en mejoras de
                proyectos y estudio inglés en la academia Smart Online, con un
                nivel básico-intermedio.
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
                Desarrollé e implementé componentes para tiendas de comercio
                electrónico, optimizando su rendimiento e integración con
                servicios backend diseñados en Node.js. Construí módulos
                escalables y mantenibles utilizando VTEX IO, VTEX FastStore,
                ReactJS y NextJS, asegurando una experiencia fluida en el
                frontend. Además, integré APIs mediante REST y GraphQL,
                mejorando la disponibilidad y el rendimiento de los datos en la
                interfaz de usuario.
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
                Desarrollé y mantuve aplicaciones administrativas en la
                plataforma VTEX IO, utilizando ReactJS en el frontend y
                Node.js/NestJS en el backend, con enfoque en la gestión de
                ecommerce. Mejoré la experiencia de usuario en plataformas de
                comercio electrónico, incrementando la usabilidad y conversión.
                Además, construí y personalicé tiendas adaptadas a las
                necesidades de los clientes, e integré datos mediante APIs con
                GraphQL, optimizando la eficiencia y los tiempos de carga.
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
                Diseñé, desarrollé y mantuve vistas y módulos interactivos para
                la aplicación WAHHU, asegurando una experiencia fluida tanto en
                desktop como en mobile. Optimicé la interfaz de usuario
                utilizando jQuery, JavaScript Vanilla, CSS, SASS, HTML y
                frameworks como Bootstrap, Twig y Tailwind CSS. Además, gestioné
                y actualicé landing pages en WordPress, mejorando su contenido y
                estructura para optimizar la conversión y la experiencia del
                usuario.
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
              <a href="">
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
              <a href="">
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
              <a href="">
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
              <a href="">
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
              <a href="">
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
