import React from "react";

const Project = ({ url, imgUrl, title, date }) => {
  return (
    <div className="bg-slate-700 my-3 px-5 py-5 rounded-3xl">
      <img
        className="w-fit object-contain bg-slate-200/70 rounded-3xl h-72 lg:mx-6 lg:w-1/2 lg:h-96"
        src={imgUrl}
        alt=""
      />
      <div className="mt-8 lg:flex lg:items-center">
        <h1 className="text-xl font-semibold text-gray-200 capitalize lg:text-4xl">
          {title}
        </h1>

        <div className="w-full mt-5 lg:w-1/2 lg:mt-0 lg:mx-6 ">
          <p className="w-fit max-w-full text-gray-200 text-lg bg-slate-600 rounded-full px-4 mb-1">
            {date}
          </p>
          <a href={url}>
            <p className="w-fit break-all text-gray-200 text-lg bg-slate-600 rounded-full py-1 px-4">
              {url}
            </p>
          </a>
        </div>
      </div>
    </div>

    // <div className="flex bg-slate-700 mb-4 rounded-3xl overflow-hidden">
    //   <a href={url} className="w-[30rem] h-[30rem]overflow-hidden  border border-red-700 ">
    //     <img src={imgUrl} alt="" className=" aspect-square"/>
    //   </a>
    //   <div className="inner">
    //     <h4>{title}</h4>
    //     <p>
    //       <em>{date}</em>
    //       <br />
    //       <em>
    //         <a href={url} target="_blank" rel="noreferrer">
    //           {url}
    //         </a>
    //       </em>
    //     </p>
    //   </div>
    // </div>
  );
};

export default Project;
