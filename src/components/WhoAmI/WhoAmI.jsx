import { content } from "../../data/content";

const WhoAmI = () => {
  const { title, data } = content.whoami;
  return (
    <div className="container">
      <header className="major">
        <h2>{title}</h2>
        <p>
          {data[0]}
          <br /> tl;dr.
          <br /> {data[1]}
        </p>
      </header>
      <p>{data[2]}</p>
    </div>
  );
};

export default WhoAmI;
