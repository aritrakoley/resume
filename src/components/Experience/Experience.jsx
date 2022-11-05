import { content } from "../../data/content";
import Item from "./Item";
const Experience = () => {
  const { title, subtitle, data } = content.experience;
  return (
    <div className="container">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <ul className="milestones">
        {data.map((e) => (
          <Item key={e} data={e} />
        ))}
      </ul>
    </div>
  );
};
export default Experience;
