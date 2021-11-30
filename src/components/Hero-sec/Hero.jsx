import styled from "styled-components";
import "./Hero.css";

const HeroHeading = styled.h1`
  font-family: Poppins;
  color: #ffffff;
  font-weight: 800;
  font-size: 6vw;
  word-break: break-word;
  font-family: "Poppins", sans-serif;
  text-align: left !important;
  margin-bottom: 5vh;
`;

const ColorSpan = styled.span`
  color: #f9004d;
`;

const HeroTitle = styled.span`
  font-size: 1.5vw;
  text-transform: uppercase;
  letter-spacing: 4px;

  text-align: left !important;
  color: white;
`;

const HeroDiv = styled.div`
  background-color: black;
  height: 80vh;
`;

export const Button = styled.button`
  margin-top: 0.5em;
  background-color: #f9004d;
  border: #f9004d;
  color: white;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  border-radius: 0.4em;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s color;
  transition: 500ms margin-top;
  padding-left: 2.5vw;
  padding-right: 2.5vw;
  font-size: 1rem;
  &:hover {
    color: #f9004d;
    border: 1px solid #f9004d;
    background-color: transparent;
    margin-top: 0.3em;
  }
`;

export const Hero = () => {
  return (
    <HeroDiv className="rn-slider-area bg-image">
      <div className="container">
        <div className="row" id="spaceHero">
          <div className="col-lg-12 mx-auto mar">
            <HeroTitle>Full stack web developer </HeroTitle>
            <HeroHeading className="h1">
              {" "}
              Hello I'm <ColorSpan>Arpit</ColorSpan> Welcome to my World.{" "}
            </HeroHeading>
            <Button>Download Resume</Button>
          </div>
        </div>
      </div>
    </HeroDiv>
  );
};
