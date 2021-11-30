import styled from "styled-components";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { useState } from "react";

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
`;

const AboutData = styled.div`
  margin-bottom: 10vh;
`;

const AboutSec = styled.section`
  padding-top: 10vh;
  background-color: #191919;
`;

export const AboutPara = styled.p`
  line-height: 4vh;
  font-weight: 300;
  color: #717173;
  padding: 0;

  font-family: "Poppins", sans-serif;
`;

export const AboutPic = styled.img``;

export const About = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AboutSec id="about-section" className="p-100 pb-2 bg-one-dark">
      <AboutDiv className="container">
        <RowGrid className="row d-flex align-items-end ">
          <div className="col-md-6 text-center">
            <AboutPic
              src="https://i.ibb.co/d5K8rPg/20210821-122531-2.jpg"
              alt="Arpit picture"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <AboutData className="col">
              <MainH1>About Me</MainH1>
              <AboutPara>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </AboutPara>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Item One" value="1" />
                    <Tab label="Item Two" value="2" />
                    <Tab label="Item Three" value="3" />
                  </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            </AboutData>
          </div>
        </RowGrid>
      </AboutDiv>
    </AboutSec>
  );
};
