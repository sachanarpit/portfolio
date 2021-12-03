import styled from "styled-components";
import { MainH1 } from "../about-sec/About";
import { MainPara } from "../services-sec/Services";
import ProjectCard from "./ProjectCard";
import { Mydata } from "../db";
// console.log("Mydata:", Mydata);

const ProjectSec = styled.section`
  background-color: #191919;
  padding-top: 10vh;
  padding-bottom: 10vh;
`;

export const Project = () => {
  return (
    <div>
      <ProjectSec id="ProjectP">
        <div className="container">
          <div className="row-md-2 align-items-center text-center">
            <MainH1>Project & Work</MainH1>
            <MainPara className="mx-auto ">
              There are many variations of passages of Lorem Ipsum <br />{" "}
              available, but the majority have suffered alteration.
            </MainPara>
            <div className="container">
              <div className="row">
                {Mydata.Projects.map((item) => (
                  <div className="col xs-12 sm-6 p-4">
                    <ProjectCard
                      title={item.title}
                      des={item.descripsion}
                      imgSlid={item.imageSlider}
                      more={item.details}
                      link={item.links}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProjectSec>
    </div>
  );
};
