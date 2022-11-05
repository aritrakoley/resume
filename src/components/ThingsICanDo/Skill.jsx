import React from "react";

const Skill = ({ iconClass, title, list }) => {
  return (
    <li className={iconClass}>
      <strong>{title}</strong>
      <br />
      {list}
    </li>
  );
};

export default Skill;
