import React from "react";
import './style_review_list.css'
const Rating3 = (props) => {
    const { stars } = props;
  
    return (
      <div className="review_list-rating">
        <img className="review_list-icon" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icon-star" />
        <img className="review_list-icon" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icon-star" />
        <img className="review_list-icon" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icons/ic_star" />
        <img className="review_list-icon" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icons/ic_star" />
        <img className="review_list-icon" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icons/ic_star" />
      </div>
    );
  }

  export default Rating3