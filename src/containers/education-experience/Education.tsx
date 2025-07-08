import React from "react";
import "./Education.css";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard";

interface EducationProps {
  theme: any;
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  return (
    <div className="main" id="project">
      <div className="projects-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="projects-header" style={{ color: theme.text }}>
             Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="projects-body-div">
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Education;
