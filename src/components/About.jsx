import logo from "../assets/images/jp.png";
import jsFromFront from "../assets/images/js_for_frontend.png";
import masterReact from "../assets/images/master_react.png";
import reactExpert from "../assets/images/react_expert.png";
import frontReact from "../assets/images/front_react.png";
import fullStack from "../assets/images/fullstack_platzi.png";
import frontArch from "../assets/images/front_arch.png";

export const About = () => {
  return (
    <div className="layout">
      <header>
        <div>
          <img src={logo} alt="juan_prieto" />
        </div>
        <div>
          <h1>Juan Diego Prieto</h1>
          <p>FullStack Developer </p>
          <span>Zipaquira - Cundinamarca</span>
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
                Durante este período, estoy enfocándome en el fortalecimiento de
                habilidades técnicas, personales y lingüísticas a través del
                trabajo independiente y el estudio autodirigido.
              </p>
              <p>
                Tras dejar una posición a tiempo completo, continué colaborando
                como freelancer en mejoras e implementaciones de proyectos,
                mientras realizaba un estudio intensivo de inglés en la academia
                Smart Online, alcanzando un nivel básico-intermedio.
                Paralelamente, desarrollé proyectos personales con tecnologías
                como React.js, Node.js y almacenamiento local, enfocados en la
                gestión de tareas, consumo de APIs y diseño de interfaces
                prácticas y funcionales.
              </p>
            </div>
          </article>
          <article className="experience">
            <div className="experience-header">
              <h2>Grupo Éxito</h2>
              <span>Frontend Developer</span>
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
              <h2>VTEX</h2>
              <span>First Party App Engineer</span>
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
              <h2>WAHHU (Riusoftbrand)</h2>
              <span>Frontend Developer</span>
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
            <h2>Smart, Academia de idiomas</h2>
            <span>Formación en idioma ingles (B1)</span>
            <h3>Enero 2025 – Actualmente</h3>
          </div>
          <div className="education-header">
            <h2>Universidad de Cundinamarca</h2>
            <span>Ingeniero de Sistemas</span>
            <h3>Agosto 2008 – marzo 2014</h3>
          </div>
        </section>
        <section className="certifications">
          <h1>Certificaciones</h1>
          <article>
            <img
              src={jsFromFront}
              alt="js-for-frontend"
              width={300}
              height={300}
            />
          </article>
          <article>
            <img
              src={masterReact}
              alt="master-react"
              width={300}
              height={300}
            />
          </article>
          <article>
            <img
              src={reactExpert}
              alt="react-expert"
              width={300}
              height={300}
            />
          </article>
          <article>
            <img src={frontReact} alt="front-react" width={300} height={300} />
          </article>
          <article>
            <img src={fullStack} alt="full-stack" width={300} height={300} />
          </article>
          <article>
            <img src={frontArch} alt="front-arch" width={300} height={300} />
          </article>
        </section>
        <section className="habilities">
          <span>HTML</span>
          <span>CSS - SASS</span>
          <span>Bootstrap</span>
          <span>Tailwind</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>Git - Github</span>
          <span>JQuery</span>
          <span>ReactJS</span>
          <span>React Router</span>
          <span>REST - GraphQL</span>
          <span>NodeJs</span>
          <span>StoryBook</span>
          <span>Google Analytics</span>
          <span>SQL</span>
          <span>WordPress</span>
        </section>
        <section className="projects-container">
          <h1>Proyectos</h1>
          <article className="project-card">
            <a href="">
              <h2>Todo list</h2>
            </a>
            <p>Aplicación tipo todo list (CRUD)</p>
            <span>React</span>
            <span>TypeScript</span>
            <span>Bootstrap</span>
          </article>
          <article className="project-card">
            <a href="">
              <h2>Patient Card</h2>
            </a>
            <p>Simulación de ficha medica de un paciente</p>
            <span>React</span>
            <span>TypeScript</span>
            <span>Bulma</span>
          </article>
          <article className="project-card">
            <a href="">
              <h2>Store availability</h2>
            </a>
            <p>Proyecto de practica sobre disponibilidad de tiendas</p>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </article>
          <article className="project-card">
            <a href="">
              <h2>The movie DB</h2>
            </a>
            <p>Proyecto de practica para consumo de la api The movie DB</p>
            <span>React</span>
            <span>TypeScript</span>
            <span>CSS</span>
          </article>
          <article className="project-card">
            <a href="">
              <h2>List of Artist</h2>
            </a>
            <p>Consumo API rest con información de grupos musicales</p>
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </article>
        </section>
      </main>
    </div>
  );
};
