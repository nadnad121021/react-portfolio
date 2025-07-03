import React from "react";
import Headroom from "react-headroom";
import "./Headerv2.css";
// import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { greeting } from "../../portfolio";

interface HeaderProps {
  theme: {
    text: string;
    body: string;
    highlight: string;
  };
  isFixed?:boolean
}
const HeaderV2: React.FC<HeaderProps> = ({ theme }) => {

  return (
    <Headroom >
      <header className={'header'}>
        <a href="/" className="logo">
           <span style={{ color: theme.text }}> {"{ "}</span>
            <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>{" }"}</span>
        </a>
        <ul className={"menu"}>
          <li>
              <a href="#about" style={{color:theme.text}}>About Me</a>
          </li>
          <li>
            <a href="#skills-interests"  style={{color:theme.text}}>Skills & Interests</a>
          </li>
          <li>
              <a href="#education-experience"  style={{color:theme.text}}>Education & Experience</a>
          </li>
          <li>
            <a href="#projects-reviews"  style={{color:theme.text}}>Projects & Reviews</a>
          </li>
          <li>
            <a href="#contact"  style={{color:theme.text}}>Contact</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
};

export default HeaderV2;
