import React from "react";
import "./style_review_list.css";
import ReviewEcommerceProduct from "./ReviewEcommerceProduct";
import Pagination from "./Pagination";

const Reviews = (props) => {
  const { spanText, avatar_url, name, review_day, stars } = props;

  return (
    <div className="review_list-reviews">
      <ReviewEcommerceProduct
        spanText={spanText}
        avatar_url={avatar_url}
        name={name}
        review_day={review_day}
        stars={stars}
      />
      {/* <Pagination /> */}
    </div>
  );
};

export default Reviews;
