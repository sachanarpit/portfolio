import styled from "styled-components";
import { Mydata } from "../db";
import "./Footer.css";
const SocialBtn = styled.button`
  background-color: transparent;
  margin-left: 1vw;
  border: transparent;
`;

export const Footer = () => {
  return (
    <footer className="page-footer font-small blue bg-dark">
      <div>
        <center>
          <h4 className="fh">Follow Me</h4>
          <br />
          {Mydata.socialContact.map((item) => (
            <SocialBtn key={item.name} style={{ color: "#f8004c" }}>
              <a href={item.link} target="_blank">
                <img src={item.icon} alt={item.name} />
              </a>
            </SocialBtn>
          ))}
          <p className="fh">Kanpur, India</p>
        </center>
      </div>

      <div className="footer-copyright text-center py-3 text-white">
        Created and Manage By{" "}
        <span className="text-warning fw-bolder"> Arpit Sachan</span>
      </div>
    </footer>
  );
};
