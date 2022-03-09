const ThingsICanDo = () => {
  return (
    <>
      <div className="container">
        <h3>Things I Can Do</h3>
        <p>Some relevant skills I have acquired over the years</p>
        <ul className="feature-icons">
          <li className="icon solid fa-code"><strong>Develop Web Apps</strong><br />ReactJS, NodeJS, HTML, CSS, JS</li>
          <li className="icon solid fa-cogs"><strong>Build Test Automation Suites</strong><br />Robot Framework, Selenium, Python</li>
          <li className="icon solid fa-mobile-alt"><strong>Build Mobile Apps</strong><br />Android Studio (Java), Ionic, PWA</li>
          <li className="icon solid fa-robot"><strong>Analyse Data and Build ML Models</strong><br />Pandas, NumPy, Matplotlib, Tensorflow</li>
        </ul>
      </div>
    </>
  );
};
export default ThingsICanDo;
