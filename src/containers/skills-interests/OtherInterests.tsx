import React from "react";
import "./Experience.css";
import { otherInterests } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import OtherInterestList from "../../components/otherInterestList/OtherInterestList";


interface OtherInterestsProps {
  theme: any;
}

const OtherInterests: React.FC<OtherInterestsProps> = ({ theme }) => {
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
