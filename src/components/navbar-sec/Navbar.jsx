import styled from "styled-components";
import MobileNav from "./MobileNav";
import "./Navbar.css";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { Mydata } from "../db";

import { nanoid } from "nanoid";

const NavSec = styled.nav`
  background-color: black;
`;

export const NavItemEffect = styled.div`
  background-color: #f9004d;
  width: 100%;
  color: #f9004d;
  height: 0.2em;
`;

const Logo = styled.img`
  width: 3em;
  padding: -1em;
`;

const NavHeader = styled.header`
  background-color: transparent;
  color: white;
`;

const NavElement = styled.span`
  color: white;
`;

const MobileBtn = styled.span`
  background-color: white;
`;

export const Header = () => {
  console.log(Mydata);
  return (
    <NavSec>
      <NavHeader>
        <nav
          className="navbar  navbar-expand-lg navbar-light top-navbar"
          data-toggle="sticky-onscroll"
        >
          <div className="container">
            <a href="#HomeP" className="navbar-brand">
              <Logo src={Mydata.logo} alt={Mydata.name} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MobileNav />
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav pull-right">
                {Mydata.navbar.map((item) => (
                  // <div></div>
                  <li key={item.id} className="nav-item">
                    <a href={item.link} className="nav-link active">
                      <NavElement> {item.title}</NavElement>
                    </a>
                    {/* <NavItemEffect></NavItemEffect> */}
                  </li>
                ))}

                <li>
                  <ButtonGroup
                    style={{ marginRight: "20px", marginLeft: "20px" }}
                    variant="text"
                    aria-label="text button group"
                  >
                    {Mydata.social.map((item) => (
                      <Button key={item.name} style={{ color: "#f8004c" }}>
                        <a href={item.link} target="_blank">
                          <img src={item.icon} alt={item.name} />
                        </a>
                      </Button>
                    ))}
                  </ButtonGroup>
                </li>
                <li className="nav-item">
                  <a
                    href={Mydata.resume}
                    target="_blank"
                    className="btn download-btn"
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavHeader>
    </NavSec>
    // </div>
  );
};
