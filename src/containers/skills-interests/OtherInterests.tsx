import React from "react";
import "./Experience.css";
import { Fade } from "react-awesome-reveal";
import OtherInterestList from "../../components/otherInterestList/OtherInterestList";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";


interface OtherInterestsProps {
  theme: any;
}

const OtherInterests: React.FC<OtherInterestsProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { otherInterests} = portfolio as TPortfolioInfo
  return (
    <div className="main" id="review">
      <div className="review-header-div">
            <Fade direction="down" duration={2000}>
              <h1 className="review-header" style={{ color: theme.text }}>
                {otherInterests.title}
              </h1>
            </Fade>
          </div>
          <div className="review-body-div">
            <div className="experience-accord">
              <OtherInterestList logos={otherInterests.data}/>
            </div>
          </div>
    </div>

  );
}

export default OtherInterests;
