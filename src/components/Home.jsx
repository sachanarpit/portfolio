import { About } from "./about-sec/About";
import { Hero } from "./Hero-sec/Hero";
import { Header } from "./navbar-sec/Navbar";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
};
