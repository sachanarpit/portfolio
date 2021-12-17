import ProjectCard from "./ProjectCard";
import { Mydata } from "../db";

export const ProjectsCards = () => {
  return (
    <>
      {Mydata.Projects.map((item) => (
        <div className="col xs-12 sm-6 p-4 ">
          <ProjectCard
            title={item.title}
            des={item.descripsion}
            imgSlid={item.imageSlider}
            more={item.details}
            link={item.links}
          />
        </div>
      ))}
    </>
  );
};
