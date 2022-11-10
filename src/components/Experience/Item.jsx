import { IconMap } from "../utils/IconMap";

const Item = ({ data }) => {
  const d = data.split("|");
  // console.log({ d: d[0], IconMap });
  return (
    <li className="flex items-center py-4">
      <div className="min-w-[3.5rem] min-h-[3.5rem] mt-1 mx-2 mr-4 flex items-center justify-center bg-slate-700 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700">
        <p className="text-4xl">{IconMap[d[0]]}</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:justify-between bg-gradient-to-r from-indigo-900 rounded-full pl-10 py-2">
        <div>
          <span className="text-xl font-bold mr-2"> {d[1]}</span>
          <div className="text-slate-400">{d[3]}</div>
        </div>
        <span className="text-slate-400 font-mono ">[{d[2]}]</span>
      </div>
    </li>
  );
};

export default Item;
