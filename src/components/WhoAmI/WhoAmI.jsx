import { content } from "../../data/content";

const WhoAmI = () => {
  const { title, data } = content.whoami;
  
  return (
    <div className="bg-slate-800 text-slate-200 m-2 p-5 md:mx-10 md:px-20 md:py-10 rounded-3xl ">
      <h2 className="text-6xl py-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 ">
        {title}
      </h2>
      <div className="py-5">
        <p className="text-lg text-slate-300">{data[0]}</p>
        <p className="mt-10 md:mt-10 text-4xl text-slate-400 ">tl;dr</p>
        <p className="mb-10 text-4xl text-slate-400 ">{data[1]}</p>
        <p className="md:mt-10 text-lg text-slate-300">{data[2]}</p>
      </div>
    </div>
  );
};

export default WhoAmI;
