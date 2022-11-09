import { useEffect, useRef, useState } from "react";
import WhoAmI from "./components/WhoAmI";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThingsICanDo from "./components/ThingsICanDo";

function App() {
  const [activeSection, setActiveSection] = useState("one");

  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  const refMain = useRef(null);

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
          const cursor = refMain.current.scrollTop + 40;
          const bounds = getVerticalBounds(e.ref.current);
          // console.log({cursor, bounds})
          return cursor >= bounds.top && cursor <= bounds.bottom;
        });
      };

      const currentSection = getCurrentSection();
      if (currentSection && currentSection.sid !== activeSection) {
        setActiveSection(currentSection.sid);
      }
      // console.log({ currentSection });
    };

    refMain.current.addEventListener("scroll", handleScroll);
    return () => refMain.current.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="w-[100%] md:h-[100vh] md:flex bg-gray-900">
      <section
        id="header"
        className="h-full px-2 flex flex-col justify-start items-center min-w-fit 2xl:pl-[15rem] 2xl:pt-5"
      >
        <Header activeSection={activeSection} />
        <Footer />
      </section>

      <section
        id="main"
        className="h-full grow flex flex-col items-stretch overflow-auto 2xl:pr-[15rem] 2xl:pt-5"
        ref={refMain}
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
      </section>
    </div>
  );
}

export default App;
