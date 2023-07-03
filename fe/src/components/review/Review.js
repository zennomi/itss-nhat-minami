import React, { useMemo } from "react";
import './style.css';
import { useState } from "react";
import ReviewBaner from "./ReviewBaner";
import ReviewList from "./ReviewList";
import useReview from "./useReview";
import PopUp from "./PopUp";


const Review = () => {
    const { reviews } = useReview();
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };

    const review_banner_overview = useMemo(() => {
      const starAvg = (reviews.reduce((acc, cur) => acc + cur.stars, 0) / reviews.length).toFixed(1);
      const reviewCount = `(${reviews.length} レビュー)`;
      const star5Count = reviews.filter((review) => review.stars === 5).length;
      const star4Count = reviews.filter((review) => review.stars === 4).length;
      const star3Count = reviews.filter((review) => review.stars === 3).length;
      const star2Count = reviews.filter((review) => review.stars === 2).length;
      const star1Count = reviews.filter((review) => review.stars === 1).length;
      return {
        starAvg,
        reviewCount,
        star5Count,
        star4Count,
        star3Count,
        star2Count,
        star1Count,
      };
    }, [reviews]) 

  return (
  <div className="review-container">
    <ReviewBaner data={review_banner_overview} onButtonClick={handleButtonClick}/>
    {showPopup && <PopUp onClose={handleClosePopup} />}
    <ReviewList reviewsData_tmp = {reviews}/>
  </div >
  )
}
export default Review;
