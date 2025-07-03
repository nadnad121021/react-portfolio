import React from "react";
import "./ReviewCard.css";
import { Fade } from "react-awesome-reveal";

// Type definitions
interface Review {
  name: string;
  title: string;
  comment: string;
  profile_path:string
  website_url:string
}

interface Theme {
  text: string;
  headerColor: string;
  [key: string]: string;
}

interface ReviewCardProps {
  review: Review;
  index: number;
  theme: Theme;
}

const ReviewCard:  React.FC<ReviewCardProps> = ({
  review,
  index,
  theme,
}) => {
  return (
      <div
           className="review-list-item"
           style={{ marginTop: index === 0 ? 30 : 50 }}
         >
           <Fade direction="left" duration={2000} >
             <div className="review-card-logo-div">
               <img
                 className="review-card-logo"
                 src={`${import.meta.env.BASE_URL}./src/assets/images/reviews/${review.profile_path}`}
                 alt=""
               />
             </div>
           </Fade>
     
           <Fade direction="right" duration={2000} >
             <div style={{ display: "flex", flexDirection: "row" }}>
               <div
                 className="arrow-left"
                 style={{ borderRight: `10px solid ${theme.body}` }}
               ></div>
               <div className="review-card" style={{ background: theme.body }}>
                 <div
                   style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                   }}
                 >
                   <div>
                     <h3
                       className="review-card-title"
                       style={{ color: theme.text }}
                     >
                       {review.name}
                     </h3>
                     <p
                       className="review-card-company"
                       style={{ color: theme.text }}
                     >
                         {review.title}
                     </p>
                   </div>
                   <div>
                     <div className="review-card-heading-right">
                       <p
                         className="review-card-company"
                         style={{ color: theme.secondaryText }}
                       >
                        {
                          review.website_url ? (
                            <a
                            href={review.website_url ? review.website_url : "#project-review" }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                           Visit website
                           </a>
                          ):<></>
                        }
                          
                       </p>
                       
                     </div>
                   </div>
                 </div>
     
                 <div
                   style={{
                     display: "flex",
                     justifyContent: "flex-start",
                     marginTop: 20,
                   }}
                 >
                   <div className="repo-description" />
                   {review.comment}
                 </div>
               </div>
             </div>
           </Fade>
         </div>
  );
};

export default ReviewCard;
