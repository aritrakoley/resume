import { content } from "../../data/content";
import ContactStub from "./ContactStub";
import { HiPhone } from "react-icons/hi";
import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";

const Header = ({ activeSection }) => {
  const { name, designation, phone, email, github, linkedin } = content.contact;
  const contactStubs = [
    {
      icon: <HiPhone className="mx-1"/>,
      title: "Phone",
      data: phone,
      url: "/",
    },
    {
      icon: <SiGmail className="mx-1" />,
      title: "Email",
      data: email,
      url: "mailto:koley.aritra824@gmail.com",
    },
    {
      icon: <SiGithub className="mx-1" />,
      title: "GitHub",
      data: github,
      url: github,
    },
    {
      icon: <SiLinkedin className="mx-1" />,
      title: "LinkedIn",
      data: linkedin,
      url: linkedin,
    },
  ];
  return (
    <>
      <header className="w-full min-h-fit m-2 py-2 flex flex-col items-center justify-between rounded-lg bg-slate-800 text-slate-200">
        <div className="flex m-1 justify-center items-center w-[9rem] h-[9rem] bg-slate-700 rounded-full shadow-sm shadow-slate-400">
          <img
            src="images/avatar.jpg"
            alt=""
            className="w-[8rem] h-[8rem] rounded-full"
          />
          {/* <div className="min-w-[9rem] min-h-[9rem] absolute top-[-0.5rem] left-[-0.5rem] blur-md  rounded-full bg-gradient-to-r from-gray-200 to-purple-500 z-1"></div> */}
        </div>
        <div
          id="name"
          className="mt-2 bg-slate-700 px-4 rounded-full shadow-sm shadow-slate-400"
        >
          {name}
        </div>
        <div
          id="designation"
          className="mt-2 bg-slate-700 px-4 rounded-full shadow-sm shadow-slate-400"
        >
          {designation}
        </div>
        <div className="mt-2 grid grid-cols-2 grid-flow-row">
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
