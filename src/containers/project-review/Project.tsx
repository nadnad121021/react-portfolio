import React from "react";
import "./Review.css";
import { projects } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "../../components/projectCard/ProjectCard";

interface ReviewProps {
  theme: any;
}

const Review: React.FC<ReviewProps> = ({ theme }) => {
  return (
    <div className="main" id="review">
      <div className="review-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="review-header" style={{ color: theme.text }}>
            Previous Shool & Intership Projects
          </h1>
        </Fade>
      </div>
      <div className="review-body-div">
        <div className="experience-accord">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} theme={theme} />
           ))}
        </div>
      </div>
    </div>

  );
}

export default Review;
