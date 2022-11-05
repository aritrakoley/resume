import { content } from "../../data/content";
import Skill from "./Skill";

const ThingsICanDo = () => {
  const { title, subtitle, data } = content.skills;
  return (
    <>
      <div className="container">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <ul className="feature-icons">
          {data.map((e) => {
            const [iconClass, title, list] = e.split("|");
            return <Skill key={title} iconClass={iconClass} list={list} />;
          })}
        </ul>
      </div>
    </>
  );
};
export default ThingsICanDo;
