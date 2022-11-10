import React from "react";

const Project = ({ url, imgUrl, title, date }) => {
  return (
    <a
      href={url}
      className="flex flex-col bg-slate-700 my-3 px-5 py-5 rounded-3xl transition ease-in-out hover:scale-105 hover:my-5"
    >
      <div className="w-full p-1 flex justify-center rounded-3xl bg-gradient-to-r from-slate-900 via-purple-500 to-slate-900 ">
        <img
          className="w-fit object-scale-down rounded-3xl h-72 lg:h-96"
          src={imgUrl}
          alt=""
        />
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-semibold text-gray-200 capitalize lg:text-2xl">
          {title}
        </h1>

        <p className="w-fit max-w-full text-gray-200 text-lg bg-slate-600 rounded-full px-4 mb-1">
          {date}
        </p>
      </div>
    </a>

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
