import React from "react";
import "./ProjectCard.css";
import { Fade, Flip } from "react-awesome-reveal";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";

type ProjectTool = {
    skillName: string,
    fontAwesomeClassname: string,
    style: Record<string,any>
}
type Project =  {
    name:string
    role:string
    description:string
    logo_path:string
    duration:string
    website_url:string
    during:string
    tools:ProjectTool[],
    isExerciseOnly:boolean
}


type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;
};

interface ProjectCardProps {
  key:number
  project: Project;
  theme: Theme;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, theme }) => {
  return (
    <div className="project-card" >
      {project.logo_path && (
        <Flip direction={"vertical"} duration={2000}>
          <div className="card-img">
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                transform: "scale(0.9)",
                objectFit:"cover"
              }}
              src={`${import.meta.env.BASE_URL}./src/assets/images/projects/${project.logo_path}`}
              alt={"project-logo"}
            />
          </div>
        </Flip>
      )}
      <Fade direction="right" duration={2000}>
        <div
          className="card-body"
          style={{ width: project.logo_path ? "90%" : "100%" }}
        >
          <div
            className="body-header"
            style={{ backgroundColor: theme.headerColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: theme.text }}>
                {project.name}
              </h2>
              <h3 className="card-subtitle" style={{ color: theme.text }}>
                as {project.role}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: theme.text }}>
                {project.duration}
              </h3>
            </div>
          </div>
          <div className="body-content">
            <p
                className="content-list"
                style={{ color: theme.text }}
              >
                {project.description}
              </p>
              <p>
                Tools used:
              </p>
              <SoftwareSkill logos={project.tools} />
            {project.website_url && (
              <a
                href={project.website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.headerColor }}
                >
                  <p className="btn" style={{ color: theme.text }}>
                    Visit Website
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectCard;
