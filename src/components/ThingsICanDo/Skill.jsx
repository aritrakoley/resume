import { IconMap } from "../utils/IconMap";
import ListItem from "./ListItem";
const Skill = ({ icon, title, list }) => {
  const skillList = list.split(",");
  // console.log(skillList);
  return (
    <li className="flex items-start mb-6">
      <div className="min-w-[3.5rem] min-h-[3.5rem] m-2 mr-4 flex items-center justify-center bg-slate-700 rounded-full bg-gradient-to-r from-lime-700 to-green-700">
        <p className="text-4xl">{IconMap[icon]}</p>
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <div className="flex flex-wrap">
          {skillList.map((e, i) => (
            <ListItem key={i} label={e} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default Skill;
