import { IconMap } from "../utils/IconMap";

const Item = ({ data }) => {
  const d = data.split("|");
  // console.log({ d: d[0], IconMap });
  return (
    <li className="flex items-center">
      <div className="w-[3.5rem] h-[3.5rem] m-2 mr-4 flex items-center justify-center bg-slate-700 rounded-full bg-gradient-to-r from-indigo-700 to-purple-700">
        <p className="text-4xl">{IconMap[d[0]]}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <span className="font-bold mr-2"> {d[1]}</span>
          <span>[{d[2]}]</span>
        </div>

        <div>{d[3]}</div>
      </div>
    </li>
  );
};

export default Item;
