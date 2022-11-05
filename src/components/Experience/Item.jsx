import React from "react";

const Item = ({ data }) => {
  const d = data.split("|");
  return (
      <li className={d[0]}>
        <strong>{d[1]}</strong> <em>[{d[1]}]</em>
        <br />
        {d[3]}
      </li>
  );
};

export default Item;
