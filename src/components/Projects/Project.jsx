import React from "react";

const Project = ({ url, imgUrl, title, date }) => {
  return (
    <article>
      <a href={url} className="image">
        <img src={imgUrl} alt="" />
      </a>
      <div className="inner">
        <h4>{title}</h4>
        <p>
          <em>{date}</em>
          <br />
          <em>
            <a href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
          </em>
        </p>
      </div>
    </article>
  );
};

export default Project;
