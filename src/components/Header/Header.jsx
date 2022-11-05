import { content } from "../../data/content";

const Header = ({ activeSection }) => {
  const { name, designation, phone, email, github, linkedin } = content.contact;
  return (
    <>
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          <a href="/">{name}</a>
        </h1>
        <p>{designation}</p>
        <div className="contact-box">
          <ul className="icons">
            <li>
              <a
                href="/"
                className="icon solid fa-phone"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Phone</span>
                <br />
                <em>{phone}</em>
              </a>
            </li>
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
          </ul>
        </div>
      </header>
      <nav id="nav">
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
