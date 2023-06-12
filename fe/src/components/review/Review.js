import React from "react";
import './style.css';
import ReviewBaner from "./ReviewBaner";
import ReviewList from "./ReviewList";


const Review = (props) => {
  const {review_banner_overview, reviewsData_tmp} = {...props}
  return (
  <div className="review-container">
    <ReviewBaner {...review_banner_overview}/>
    <ReviewList reviewsData_tmp = {reviewsData_tmp}/>
  </div >
  )
}
export default Review;
