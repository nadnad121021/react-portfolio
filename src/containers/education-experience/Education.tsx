import React from "react";
import "./Education.css";
import { Fade } from "react-awesome-reveal";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";

interface EducationProps {
  theme: any;
}

const Education: React.FC<EducationProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { degrees } = portfolio as TPortfolioInfo
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
        {degrees.map((degree, index) => (
          <DegreeCard key={index} degree={degree} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Education;
