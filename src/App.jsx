import { useEffect, useRef, useState } from "react";
import WhoAmI from "./components/WhoAmI";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThingsICanDo from "./components/ThingsICanDo";
import { content } from "./data/content";

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
    <div>
      <section id="header">
        <Header activeSection={activeSection} />
      </section>
      <div id="wrapper">
        <div id="main">
          <section id="zero">
            <div className="image main" data-position="center">
              <img src={content.bannerImgUrl} alt="" />
            </div>
          </section>
          <section id="one" ref={refOne} className="mx-40">
            <WhoAmI />
          </section>
          <section id="two" ref={refTwo}>
            <Experience />
          </section>
          <section id="three" ref={refThree}>
            <ThingsICanDo />
          </section>
          <section id="four" ref={refFour}>
            <Projects />
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
