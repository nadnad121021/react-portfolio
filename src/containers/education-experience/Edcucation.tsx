import React from "react";
import "./Education.css";
import { degrees } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard";

type Theme = {
  text: string;
  headerColor: string;
  [key: string]: string;

};

interface EducationsProps {
  theme: Theme;
}

const Education: React.FC<EducationsProps> = ({ theme }) => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Degrees Received
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Education;
