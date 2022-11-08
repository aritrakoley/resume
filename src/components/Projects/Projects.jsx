import { content } from "../../data/content";
import Project from "./Project";
const Projects = () => {
  const { title, subtitle, data } = content.projects;
  return (
    <>
      <div className="bg-slate-800 text-slate-200 py-10 px-5 md:px-20 lg:px-40 mt-2 rounded-3xl">
        <h2 className="text-6xl py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">
          {title}
        </h2>
        <p className="text-xl text-slate-400">{subtitle}</p>
        <div className="my-10">
          {data.map((e) => (
            <Project key={e.url} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
