import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/navbar";
import Divider from "./components/divider";
import Projects from "./components/projects";
import Contact from "./components/contact";
import CollapsedNav from "./components/collapsedNav";
import ReverseBanner from "./components/reverseBanner";
import { useIsInViewport } from "./hooks/useIsInViewport";

function App() {
  const [location, setLocation] = React.useState<string>("home");
  const [windowWidth, setWindowWidth] = React.useState<number>(0);
  const [changeNav, setChangeNav] = React.useState<boolean>(true);

  React.useEffect(() => {
    let cb = function () {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", cb);

    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);

  const homeRef = React.useRef<any>(null);
  const projectRef = React.useRef<any>(null);
  const contactRef = React.useRef<any>(null);

  const executeScroll = (loc: string) => {
    setChangeNav(false);
    if (loc === "home") {
      homeRef.current?.scrollIntoView();
    } else if (loc === "projects") {
      projectRef.current?.scrollIntoView();
    } else if (loc === "contact") {
      contactRef.current?.scrollIntoView();
    }
    setTimeout(() => setChangeNav(true), 350);
  };

  const isProjectsInViews = useIsInViewport(projectRef);
  const isContactInView = useIsInViewport(contactRef);
  const isHomeInView = useIsInViewport(homeRef);

  React.useEffect(() => {
    if (changeNav) {
      if (isHomeInView && !isContactInView && !isProjectsInViews) {
        setLocation("home");
      } else if (!isHomeInView && !isContactInView && isProjectsInViews) {
        setLocation("projects");
      } else if (!isHomeInView && (isContactInView || isProjectsInViews)) {
        setLocation("contact");
      }
    }
  }, [isHomeInView, isContactInView, isProjectsInViews]);

  return (
    <div className="App">
      {windowWidth > 1200 ? (
        <Navbar executeScroll={executeScroll} setLocation={setLocation} location={location} />
      ) : (
        <CollapsedNav executeScroll={executeScroll} setLocation={setLocation} location={location} />
      )}
      <div ref={homeRef} style={{ color: "white", height: "30rem", position: "absolute" }}></div>
      <ReverseBanner />
      <Divider />
      <div
        ref={projectRef}
        style={{ color: "white", marginBottom: "2rem", height: "30rem", position: "absolute" }}
      ></div>
      <Projects />
      {/* <Divider /> */}
      <Contact />
      <div ref={contactRef} style={{ color: "transparent", position: "absolute", userSelect: "none" }}>
        .
      </div>
    </div>
  );
}

export default App;
