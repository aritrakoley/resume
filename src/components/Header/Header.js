const Header = ({activeSection}) => {
  return (
    <>
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </span>
        <h1 id="logo">
          <a href="#">Aritra Koley</a>
        </h1>
        <p>Software Engineer</p>
      </header>
      <nav id="nav">
        <ul>
          <li>
            <a href="#one" className={ activeSection === "one" ? "active" : null }>
              Who Am I ?
            </a>
          </li>
          <li>
            <a href="#two" className={ activeSection === "two" ? "active" : null } >Experience</a>
          </li>
          <li>
            <a href="#two" className={ activeSection === "three" ? "active" : null } >Things I Can Do</a>
          </li>
          <li>
            <a href="#three" className={ activeSection === "four" ? "active" : null }>A Few Accomplishments</a>
          </li>
          <li>
            <a href="#four" className={ activeSection === "five" ? "active" : null }>Contact</a>
          </li>
        </ul>
      </nav>
      <footer>
        <ul className="icons">
          <li>
            <a href="#" className="icon brands fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon brands fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon solid fa-envelope">
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Header;
