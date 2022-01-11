import styled from "styled-components";
import { Mydata } from "../db";

import { AboutInfo } from "./AboutInfo";
export const RowGrid = styled.div`
  margin: auto;
  width: 80%;
  background-color: #191919;
  color: white;
`;

export const AboutDiv = styled.div`
  background-color: #191919;
  color: white;
  padding-bottom: 10vh;
`;

export const MainH1 = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  word-break: break-word;
  font-weight: 700;
  font-size: 6vw;
  line-height: 1.4074;

  @media only screen and (max-width: 600px) {
    font-size: 12vw;
  }
`;

const AboutData = styled.div`
  margin-bottom: 5vh;
`;

const AboutSec = styled.section`
  padding-top: 10vh;
  background-color: #191919;
`;

export const AboutPara = styled.p`
  font-weight: 300;
  color: #717173;
  padding: 0;
  font-size: 18px;
  line-height: 30px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;

  font-family: "Poppins", sans-serif;
  @media only screen and (max-width: 700px) {
    font-size: 4vw;
    line-height: 25px;
  }
`;

export const AboutPic = styled.img``;

export const About = () => {
  return (
    <AboutSec id="AboutP" className="p-100 pb-2 bg-one-dark">
      <AboutDiv className="container">
        <div className="row-md-2 align-items-center text-center">
          <MainH1>About Me</MainH1>
        </div>

        <RowGrid className="row d-flex align-items-end ">
          <div className="col-md-6 text-center">
            <AboutPic
              src="/photo.jpg"
              alt="Arpit picture"
              loading="lazy"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <AboutData className="col">
              <AboutPara>{Mydata.AboutSec.introduction}</AboutPara>
              <AboutInfo />
            </AboutData>
          </div>
        </RowGrid>
      </AboutDiv>
    </AboutSec>
  );
};
