import React from "react";
import "./Header.css";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { usePortfolio } from '../../context/PortfolioContext';
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";

interface HeaderProps {
  theme: any
}

const onMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>, color: string) => {
  const el = event.target as HTMLElement;
  el.style.backgroundColor = color;
};

const onMouseOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
  const el = event.target as HTMLElement;
  el.style.backgroundColor = "transparent";
};

const Header: React.FC<HeaderProps> = ({ theme }) => {
   const { portfolio } = usePortfolio();
   const {settings ,greeting } = portfolio as TPortfolioInfo

  const link = settings.isSplash ? "/splash" : "/home";

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/skills-Interests", label: "Skills & Interests" },
    { path: "/education-experience", label: "Education & Experience" },
    { path: "/projects-reviews", label: "Project & Reviews" },
    { path: "/contact", label: "Contact Me" },
  ];

  return (
    <Fade direction="down" duration={1000} triggerOnce>
      <div>
        <header className="main-header">
          <NavLink to={link} className="logo">
            <span style={{ color: theme.text }}> {"{ "}</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>{" }"}</span>
          </NavLink>

          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          <ul className="menu" style={{ backgroundColor: theme.body }}>
            {navLinks.map((nav) => (
              <li key={nav.path}>
                <NavLink
                  to={nav.path}
                  className={({ isActive }) => `nav-link ${isActive ? "font-bold" : ""}`}
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(e) => onMouseEnter(e, theme.highlight)}
                  onMouseOut={onMouseOut}
                >
                  {nav.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </header>
      </div>
    </Fade>
  );
};

export default Header;
