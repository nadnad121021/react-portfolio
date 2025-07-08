import React from "react";
import "./Review.css";
import { reviews } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import ReviewCard from "../../components/reviewCard/ReviewCard";

interface ReviewProps {
  theme: any;
}

const Review: React.FC<ReviewProps> = ({ theme }) => {
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
