import React from "react";
import "./OtherInterestList.css";
import { Fade } from "react-awesome-reveal";
import CustomTooltip from "../toolTip/CustomTooltip";
import type { IOtherInterestData } from "../../interfaces/portfolioInfo.interface";

type OtherInterestListProps = {
  logos: IOtherInterestData[];
};

const OtherInterestList: React.FC<OtherInterestListProps> = ({ logos }) => {
  return (
    <div className="other-interest-lists-main-div">
      <ul className="dev-icons-orgs">
        {logos.map((logo,index) => (
          <CustomTooltip content={logo.login} key={index}>
            <li className="other-interest-lists-inline" data-name={logo.login}>
              <Fade direction="down" duration={2000}>
                <img
                  className="other-interest-lists-img"
                  src={logo.avatarUrl}
                  alt={logo.login}
                />
              </Fade>
            </li>
          </CustomTooltip>
        ))}
      </ul>
    </div>
  );
};

export default OtherInterestList;
