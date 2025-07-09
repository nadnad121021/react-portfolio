import React from "react";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";


interface ExperienceProps {
  theme: any;
}

const Experience: React.FC<ExperienceProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { experience } = portfolio as TPortfolioInfo
  return (
    <div className="main" id="review">
      {experience.sections.map((section,i) => (
        <div key={i}>
          <div className="review-header-div">
            <Fade direction="down" duration={2000}>
              <h1 className="review-header" style={{ color: theme.text }}>
                {section.title}
              </h1>
            </Fade>
          </div>
          <div className="review-body-div">
            <div className="experience-accord">
              {section.experiences.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  index={index}
                  totalCards={section.experiences.length}
                  experience={experience}
                  theme={theme}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Experience;
