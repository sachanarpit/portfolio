import { About } from "./about-sec/About";
import { Contact } from "./contact-sec/Contact";
import { Footer } from "./footer-sec/Footer";
import { Hero } from "./Hero-sec/Hero";
import { useState, useEffect } from "react";
import HideAppBar from "./navbar-sec/Sticky";
import { Project } from "./project-sec/Project";
import { Services } from "./services-sec/Services";

export const Home = () => {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 100);
  }, []);
  return spinner === true ? (
    <div style={{ backgroundColor: "black", height: 1000 }}>
      <center>
        <img style={{ width: 600, height: 600 }} src="/load.webp" alt="" />
      </center>
    </div>
  ) : (
    <div>
      <HideAppBar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
