import { content } from "../../data/content";
import Item from "./Item";
const Experience = () => {
  const { title, subtitle, data } = content.experience;
  return (
    <div className="bg-slate-800 text-slate-200 m-2 p-5 md:mx-10 md:px-20 md:py-10 rounded-3xl ">
      <h2 className="text-6xl py-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600 ">
        {title}
      </h2>
      <p className="text-xl text-slate-400">{subtitle}</p>
      <ul className="mt-10 pb-5">
        {data.map((e) => (
          <Item key={e} data={e} />
        ))}
      </ul>
    </div>
  );
};
export default Experience;
