import React from "react";
import "./Review.css";
import { Fade } from "react-awesome-reveal";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { usePortfolio } from "../../context/PortfolioContext";
import type { TPortfolioInfo } from "../../interfaces/portfolioInfo.interface";

interface ReviewProps {
  theme: any;
}

const Review: React.FC<ReviewProps> = ({ theme }) => {
  const { portfolio } = usePortfolio();
  const { reviews } = portfolio as TPortfolioInfo
  return (
    <div className="main" id="review">
      <div className="review-header-div">
        <Fade direction="down" duration={2000}>
          <h1 className="review-header" style={{ color: theme.text }}>
            What People say
          </h1>
        </Fade>
      </div>
      <div className="review-body-div">
        <div className="experience-accord">
            {reviews.map((review,index) => (
              <ReviewCard
                  key={index}
                  index={index}
                  review={review}
                  theme={theme}
                />
            ))}
        </div>
      </div>
    </div>

  );
}

export default Review;
