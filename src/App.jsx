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
    <div className="w-[100%] h-[100vh] flex bg-gray-900">

      <section
        id="header"
        className="h-full px-2 flex flex-col justify-start items-center min-w-fit"
      >
        <Header activeSection={activeSection} />
      </section>

      <section
        id="main"
        className="h-full grow flex flex-col overflow-auto"
      >

        {/* <section id="zero">
          <div className="h-[30%] w-[100%] overflow-hidden">
            <img src={content.bannerImgUrl} alt="" className="h-full w-full" />
          </div>
        </section> */}

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
          <Projects />
        </section>

        <section id="footer" className="border border-blue-600">
          <Footer />
        </section>

      </section>

    </div>
  );
}

export default App;
