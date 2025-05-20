import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaGitSquare,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiReactrouter,
  SiStorybook,
  SiGoogleanalytics,
  SiBulma,
  SiExpress,
  SiJest,
} from "react-icons/si";
import { DiJqueryLogo } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";

export const Habilities = () => {
  return (
    <section className="habilities">
      <h1>Habilidades</h1>
      <article>
        <span>
          <FaHtml5 size={60} />
          <small>HTML</small>
        </span>
        <span>
          <FaCss3Alt size={60} />
          <small>CSS</small>
        </span>
        <span>
          <IoLogoJavascript size={60} />
          <small>JavaScript</small>
        </span>
        <span>
          <FaSass size={60} />
          <small>SASS</small>
        </span>
        <span>
          <FaBootstrap size={60} />
          <small>Bootstrap</small>
        </span>
        <span>
          <RiTailwindCssFill size={60} />
          <small>Tailwind CSS</small>
        </span>
        <span>
          <SiBulma size={60} />
          <small>Bulma CSS</small>
        </span>
        <span>
          <SiTypescript size={60} />
          <small>TypeScript</small>
        </span>
        <span>
          <FaGitSquare size={60} />
          <small>Git</small>
        </span>
        <span>
          <FaGithub size={60} />
          <small>Github</small>
        </span>
        <span>
          <DiJqueryLogo size={60} />
          <small>JQuery</small>
        </span>
        <span>
          <FaReact size={60} />
          <small>ReactJS</small>
        </span>
        <span>
          <SiReactrouter size={60} />
          <small>React Router</small>
        </span>
        <span>
          <GrGraphQl size={60} />
          <small>GraphQL</small>
        </span>
        <span>
          <FaNodeJs size={60} />
          <small>NodeJs</small>
        </span>
        <span>
          <SiExpress size={60} />
          <small>ExpressJS</small>
        </span>
        <span>
          <SiStorybook size={60} />
          <small>StoryBook</small>
        </span>
        <span>
          <SiJest size={60} />
          <small>Jest</small>
        </span>
        <span>
          <SiGoogleanalytics size={60} />
          <small>Google Analytics</small>
        </span>
        <span>
          <FaDatabase size={60} />
          <small>SQL</small>
        </span>
        <span>
          <FaWordpress size={60} />
          <small>WordPress</small>
        </span>
      </article>
    </section>
  );
};
