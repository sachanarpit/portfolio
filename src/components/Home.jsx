import { About } from "./about-sec/About";
import { Contact } from "./contact-sec/Contact";
import { Footer } from "./footer-sec/Footer";
import { Hero } from "./Hero-sec/Hero";

import HideAppBar from "./navbar-sec/Sticky";
import { Project } from "./project-sec/Project";
import { Services } from "./services-sec/Services";

export const Home = () => {
  return (
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
