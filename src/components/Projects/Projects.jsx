import { content } from "../../data/content";
import Project from "./Project";
const Projects = () => {
  const { title, subtitle, data } = content.projects;
  return (
    <>
      <div className="container">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <div className="features">
          {data.map((e) => (
            <Project key={e.url} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
