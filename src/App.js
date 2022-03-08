import { useEffect, useRef, useState } from "react";
import About from "./components/About/About";
import Accomplishments from "./components/Accomplishments/Accomplishments";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ThingsICanDo from "./components/ThingsICanDo/ThingsICanDo";

function App() {
  const [activeSection, setActiveSection] = useState("one");

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);

  useEffect(() => {
    const sections = [
      { sid: "one", ref: refOne },
      { sid: "two", ref: refTwo },
      { sid: "three", ref: refThree },
      { sid: "four", ref: refFour },
    ];
    
    const handleScroll = () => {

      const getVerticalBounds = (elm) => {
        return {
          top: elm.offsetTop,
          bottom: elm.offsetTop + elm.getBoundingClientRect().height,
        };
      };

      const getCurrentSection = () => {
        return sections.find((e) => {
          const cursor = window.scrollY + 80;
          const bounds = getVerticalBounds(e.ref.current);
          return cursor >= bounds.top && cursor <= bounds.bottom;
        });
      };

      const currentSection = getCurrentSection();
      if (currentSection && currentSection.sid !== activeSection) {
        setActiveSection(currentSection.sid);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="is-preload">
      <section id="header">
        <Header activeSection={activeSection} />
      </section>
      <div id="wrapper">
        <div id="main">
          <section id="one" ref={refOne}>
            <About />
          </section>
          <section id="two" ref={refTwo}>
            <ThingsICanDo />
          </section>
          <section id="three" ref={refThree}>
            <Accomplishments />
          </section>
          <section id="four" ref={refFour}>
            <Contact />
          </section>
        </div>
      </div>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
