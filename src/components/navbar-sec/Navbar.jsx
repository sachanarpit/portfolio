import styled from "styled-components";
import "./Navbar.css";

const navSec = styled.nav`
  background-color: black;
`;

const NavItemEffect = styled.div`
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
  background-color: black;
  color: white;
`;

const NavElement = styled.span`
  color: white;
`;

export const Header = () => {
  return (
    // <div className="header">
    //   <div className="header-wrapper">
    //     <div className="header-left">
    //       <div className="logo">
    //         <a href="#">
    //           <img src="" alt="" />
    //         </a>
    //       </div>
    //       <div className="ml--50">
    //         <nav>
    //           <ul className="mainmenu">
    //             <li className="menu-item">
    //               {" "}
    //               <a href="" className="nav-link">
    //                 Home
    //               </a>{" "}
    //             </li>
    //             <li className="menu-item">About</li>
    //             <li className="menu-item">Services</li>
    //             <li className="menu-item">Portfolio</li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //     <div className="header-right">
    //       <div className="full-overlay"></div>
    //       <div className="social-share">
    //         <ul className="social-share-ui">
    //           <li>
    //             <a href="" className="icon">
    //               f
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="icon">
    //               t
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="icon">
    //               l
    //             </a>
    //           </li>
    //           <li>
    //             <a href="" className="icon">
    //               i
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    <navSec>
      <NavHeader>
        <nav
          className="navbar  navbar-expand-lg navbar-light top-navbar"
          data-toggle="sticky-onscroll"
        >
          <div className="container">
            <a className="navbar-brand" href="#">
              <Logo
                src="https://i.ibb.co/QXYBG4z/a-removebg-preview.png"
                alt=""
              />
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
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav pull-right">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <NavElement> Home</NavElement>
                  </a>
                  <NavItemEffect></NavItemEffect>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavElement> Services</NavElement>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavElement> Our Work</NavElement>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavElement> Pricing</NavElement>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavElement> About</NavElement>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <NavElement> Contact</NavElement>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn download-btn" href="#">
                    <NavElement> Download Resume</NavElement>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </NavHeader>
    </navSec>
    // </div>
  );
};
