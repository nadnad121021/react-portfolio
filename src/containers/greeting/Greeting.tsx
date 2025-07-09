import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-awesome-reveal";
import FeelingProud from "./FeelingProud";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";

interface GreetingProps {
  theme: {
    text: string;
    secondaryText: string;
    splashBg?: string;
    highlight?: string;
    body?: string;
  };
}

const Greeting: React.FC<GreetingProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { greeting } = portfolio as TPortfolioInfo
  return (
    <Fade direction="up" duration={2000} triggerOnce>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.quote && (
                <h3 className="greeting-quotes" style={{ color: theme.text }}>
                  {greeting.quote}
                </h3>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} theme={theme}/>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Greeting;
