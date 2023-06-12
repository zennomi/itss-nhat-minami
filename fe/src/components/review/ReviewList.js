import React from "react";
import "./style_review_list.css";
import Reviews from "./Reviews";

const ReviewList = (props) => {
  const {reviewsData_tmp} = props
  return (
    <div>
      {reviewsData_tmp.map((props, index) => {
        return <Reviews key={index} {...props} />;
      })}
    </div>
  );
};

export default ReviewList;