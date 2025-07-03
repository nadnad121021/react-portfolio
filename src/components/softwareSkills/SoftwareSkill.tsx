import React from "react";
import "./SoftwareSkill.css";
import CustomTooltip from "../toolTip/CustomTooltip";

interface Logo {
  skillName: string;
  fontAwesomeClassname?: string;
  imageSrc?: string;
  style?: React.CSSProperties;
}

interface SoftwareSkillProps {
  logos: Logo[];
}

const SoftwareSkill: React.FC<SoftwareSkillProps> = ({ logos }) => {
  return (
   <div className="software-skills-main-div">
  <ul className="dev-icons">
    {logos.map((logo, i) => (
      <li className="software-skill-inline" key={i}>
        <CustomTooltip content={logo.skillName}>
          <span>
            {logo.fontAwesomeClassname && (
              <span
                className="iconify"
                data-icon={logo.fontAwesomeClassname}
                style={logo.style}
                data-inline="false"
              ></span>
            )}
            {!logo.fontAwesomeClassname && logo.imageSrc && (
              <img
                className="skill-image"
                style={logo.style}
                src={`/skills/${logo.imageSrc}`}
                alt={logo.skillName}
              />
            )}
          </span>
        </CustomTooltip>
      </li>
    ))}
  </ul>
</div>


  );
};

export default SoftwareSkill;
