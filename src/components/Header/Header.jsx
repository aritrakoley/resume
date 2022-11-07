import { content } from "../../data/content";
import ContactStub from "./ContactStub";

const Header = ({ activeSection }) => {
  const { name, designation, phone, email, github, linkedin } = content.contact;
  const contactStubs = [
    {
      icon: "",
      title: "Phone",
      data: phone,
      url: "/",
    },
    {
      icon: "",
      title: "Email",
      data: email,
      url: "mailto:koley.aritra824@gmail.com",
    },
    {
      icon: "",
      title: "GitHub",
      data: github,
      url: github,
    },
    {
      icon: "",
      title: "LinkedIn",
      data: linkedin,
      url: linkedin,
    },
  ];
  return (
    <>
      <header className="w-full h-[40%] flex flex-col items-center justify-start p-2 bg-gray-800 text-slate-200">
        <span className="">
          <img
            src="images/avatar.jpg"
            alt=""
            className="w-[8rem] h-[8rem] rounded-full"
          />
        </span>
        <div id="name">{name}</div>
        <div id="designation">{designation}</div>
        <div className="w-full h-full grid grid-cols-2 grid-flow-row">
          {contactStubs.map((e) => (
            <ContactStub key={e.title} {...e} />
          ))}
        </div>
      </header>
      <nav
        id="nav"
        className="w-full grow flex flex-col bg-gray-700 text-white"
      >
        <ul>
          <li>
            <a
              href="#one"
              className={activeSection === "one" ? "active" : null}
            >
              Who Am I ?
            </a>
          </li>
          <li>
            <a
              href="#two"
              className={activeSection === "two" ? "active" : null}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#three"
              className={activeSection === "three" ? "active" : null}
            >
              Things I Can Do
            </a>
          </li>
          <li>
            <a
              href="#four"
              className={activeSection === "four" ? "active" : null}
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
{
  /* <ul className="flex flex-wrap">
            <li>
              <a
                href="mailto:koley.aritra824@gmail.com"
                className="icon solid fa-envelope"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Email</span>
                <br />
                <em>{email}</em>
              </a>
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/aritrakoley"
                className="icon brands fa-github"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Github</span>
                <br />
                <em>{github}</em>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aritra-koley"
                className="icon brands fa-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">LinkedIn</span>
                <br />
                <em>{linkedin}</em>
              </a>
            </li>
          </ul> */
}
