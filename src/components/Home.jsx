import { About } from "./about-sec/About";
import { Contact } from "./contact-sec/Contact";
import { Footer } from "./footer-sec/Footer";
import { Hero } from "./Hero-sec/Hero";
import { Header } from "./navbar-sec/Navbar";
import { Project } from "./project-sec/Project";
import { Services } from "./services-sec/Services";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
