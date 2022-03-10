const Header = ({ activeSection }) => {
  return (
    <>
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          <a href="/">Aritra Koley</a>
        </h1>
        <p>Software Engineer</p>
        <div className="contact-box">
          <ul className="icons">
            <li>
              <a href="/" className="icon solid fa-phone" target="_blank" rel="noreferrer">
                <span className="label">Phone</span><br />
                <em>+91 8017011376</em>
              </a>
            </li>
            <li>
              <a
                href="mailto:koley.aritra824@gmail.com"
                className="icon solid fa-envelope"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">Email</span><br />
                <em>koley.aritra824@gmail.com</em>
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
                <span className="label">Github</span><br />
                <em>github.com/aritrakoley</em>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aritra-koley"
                className="icon brands fa-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span className="label">LinkedIn</span><br />
                <em>linkedin.com/in/aritra-koley</em>
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
      {/* <footer>
        <ul className="icons">
          {/* <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          {/* <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li> 
           <li>
            <a href="#" className="icon solid fa-phone" target="_blank">
              <span className="label">Phone</span><em>+91 8017011376</em>
            </a>
          </li>
          <li>
            <a href="mailto:koley.aritra824@gmail.com" className="icon solid fa-envelope" target="_blank">
              <span className="label">Email</span><em>koley.aritra824@gmail.com</em>
            </a>
          </li>
          <li>
            <a href="https://github.com/aritrakoley" className="icon brands fa-github" target="_blank">
              <span className="label">Github</span><em>github.com/aritrakoley</em>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aritra-koley" className="icon brands fa-linkedin" target="_blank">
              <span className="label">LinkedIn</span><em>linkedin.com/in/aritra-koley</em>
            </a>
          </li>
        </ul>
      </footer> */}
    </>
  );
};

export default Header;
