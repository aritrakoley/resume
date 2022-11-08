import { content } from "../../data/content";
import Skill from "./Skill";

const ThingsICanDo = () => {
  const { title, subtitle, data } = content.skills;
  return (
    <>
      <div className="bg-slate-800 text-slate-200 py-10 px-5 md:px-20 lg:px-40 mt-2 rounded-3xl">
        <h2 className="text-6xl py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-600">
          {title}
        </h2>
        <p className="text-xl text-slate-400">{subtitle}</p>
        <ul className="mt-10">
          {data.map((e) => {
            const [icon, title, list] = e.split("|");
            return <Skill key={title} title={title} icon={icon} list={list} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default ThingsICanDo;
