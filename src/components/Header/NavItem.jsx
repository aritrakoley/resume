const NavItem = ({ id, activeSection, title }) => {
  const activeStyle = "scale-110 shadow-md shadow-slate-400";
  // console.log({ id, activeSection, title });
  return (
    <li
      className={`w-[90%] mx-2 mb-3 py-1 text-center text-xl rounded-full bg-slate-700 hover:scale-110 ease-in-out duration-100 shadow-sm shadow-slate-400 hover:shadow-md hover:shadow-slate-400 ${
        activeSection === id ? activeStyle : null
      }`}
    >
      <a href={"#" + id}>
        {title}
      </a>
    </li>
  );
};

export default NavItem;
