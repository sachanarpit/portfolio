import { About } from "./about-sec/About";
import { Hero } from "./Hero-sec/Hero";
import { Header } from "./project-sec/navbar-sec/Navbar";
import { Services } from "./services-sec/Services";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
};
