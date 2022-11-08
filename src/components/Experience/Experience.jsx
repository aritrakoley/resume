import { content } from "../../data/content";
import Item from "./Item";
const Experience = () => {
  const { title, subtitle, data } = content.experience;
  return (
    <div className="bg-slate-800 text-slate-200 py-10 px-5 md:px-20 lg:px-40 mt-2 rounded-3xl">
      <h2 className="text-6xl py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">{title}</h2>
      <p className="text-xl text-slate-400">{subtitle}</p>
      <ul className="mt-10">
        {data.map((e) => (
          <Item key={e} data={e} />
        ))}
      </ul>
    </div>
  );
};
export default Experience;
