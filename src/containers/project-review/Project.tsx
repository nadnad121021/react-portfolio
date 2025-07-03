import React from "react";
import "./Project.css";
import { projects } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "../../components/projectCard/ProjectCard";

type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;

};

interface ProjectsProps {
  theme: Theme;
}

const Project: React.FC<ProjectsProps> = ({ theme }) => {
  return (
    <div className="main" id="project">
      <div className="projects-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="projects-header" style={{ color: theme.text }}>
            Previous Shool & Intership Projects
          </h1>
        </Fade>
      </div>
      <div className="projects-body-div">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Project;
