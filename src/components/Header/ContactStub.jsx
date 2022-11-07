import React from "react";

const ContactStub = ({icon, title, data, url}) => {
  return (
    <div className="flex rounded-lg m-1 border border-gray-200">
      <a
        href={url}
        className={icon}
        target="_blank"
        rel="noreferrer"
      >
        <span className="label">{title}</span>
        <br />
        <em>{data}</em>
      </a>
    </div>
  );
};

export default ContactStub;
