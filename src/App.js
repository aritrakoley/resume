import { useEffect, useRef, useState } from "react";
import WhoAmI from "./components/WhoAmI/WhoAmI";
import Experience from "./components/Experience/Experience";
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
  const refFive = useRef(null);

  useEffect(() => {
    const sections = [
      { sid: "one", ref: refOne },
      { sid: "two", ref: refTwo },
      { sid: "three", ref: refThree },
      { sid: "four", ref: refFour },
      { sid: "five", ref: refFive },
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
          const cursor = window.scrollY + 40;
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
            <WhoAmI />
          </section>
          <section id="two" ref={refTwo}>
            <Experience />
          </section>
          <section id="three" ref={refThree}>
            <ThingsICanDo />
          </section>
          <section id="four" ref={refFour}>
            <Accomplishments />
          </section>
          <section id="five" ref={refFive}>
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
