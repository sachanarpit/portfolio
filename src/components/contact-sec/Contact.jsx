import styled from "styled-components";
import { MainH1 } from "../about-sec/About";

import { MainPara } from "../services-sec/Services";
import { ContactForm } from "./Form";

const ContactSec = styled.section`
  background-color: #000000;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const Contact = () => {
  return (
    <div>
      <ContactSec id="ContactP">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <MainH1>Contact Me</MainH1>
              <MainPara className="mx-auto ">
                There are many variations of passages of Lorem Ipsum <br />{" "}
                available, but the majority have suffered alteration.
              </MainPara>
              <ContactForm />
            </div>
          </div>
        </div>
      </ContactSec>
    </div>
  );
};
