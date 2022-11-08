import { IconMap } from "../utils/IconMap";

const Item = ({ data }) => {
  const d = data.split("|");
  console.log({ d: d[0], IconMap });
  return (
    <li>
      {IconMap[d[0]]}
      <strong>{d[1]}</strong> <em>[{d[1]}]</em>
      <br />
      {d[3]}
    </li>
  );
};

export default Item;
