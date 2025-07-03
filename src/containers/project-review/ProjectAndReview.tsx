import React from "react";
import "./ProjectAndReview.css";
import { Fade } from "react-awesome-reveal";
import ProjectAndReviewImg from "./ProjectAndReviewImg";
import Review from "./Review";
import Project from "./Project";

type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;

};

interface ProjectReviewsProps {
  theme: Theme;
}

const ProjectAndReview: React.FC<ProjectReviewsProps> = ({ theme }) => {
  return (
    <div className="project-review-main" id="projects-reviews">
        <div className="basic-project-review">
          <Fade direction="right" duration={1000} >
            <div className="heading-div">
              <div className="heading-img-div">
                <ProjectAndReviewImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Projects & Reviews
                </h1>
                {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                   A showcase of completed projects and the words of those I've worked with.
                </h3> */}
                 A showcase of completed projects and the words of those I've worked with.
              </div>
            </div>
          </Fade>
          <Project theme={theme} />
          <Review theme={theme} />
          {/* <Experience theme={theme} /> */}
        </div>
      </div>
  );
};

export default ProjectAndReview;
