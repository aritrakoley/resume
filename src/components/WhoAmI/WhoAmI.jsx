import { content } from "../../data/content";

const WhoAmI = () => {
  const { title, data } = content.whoami;
  return (
    <div className="bg-slate-800 text-slate-200 py-10 px-5 md:px-20 lg:px-40 mt-2 rounded-3xl">
      <h2 className="text-6xl py-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
        {title}
      </h2>
      <div>
        <p className="mt-10 text-lg text-slate-300">{data[0]}</p>
        <p className="mt-10 text-4xl text-slate-400">tl;dr</p>
        <p className="text-4xl text-slate-400">{data[1]}</p>
        <p className="mt-10 text-lg text-slate-300">{data[2]}</p>
      </div>
    </div>
  );
};

export default WhoAmI;
