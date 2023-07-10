import React from "react";
import "./style_review_list.css";
import User from "./User";
import Rating3 from "./Rating3";
import Rating from '@mui/material/Rating';
const ReviewEcommerceProduct = (props) => {
  const { spanText, avatar_url, name, review_day, stars } = props;

  return (
    <div className="review_list-review-ecommerce-product-1 review_list-review-ecommerce-product pr-4">
      <User avatar_url={avatar_url} name={name} review_day={review_day} className="review_list-user" />
      <div className="review_list-x">
        {/* <Rating3
            stars={stars}
          /> */}

        <Rating name="read-only" value={stars} readOnly />
        <div className="review_list-gr publicsans-normal-charade-14px">
          <span className="review_list-span publicsans-normal-charade-14px">
            {spanText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReviewEcommerceProduct;
