import React from "react";
import './style_review_list.css'
const Pagination = () => {
    return (
      <div className="review_list-navbar">
        <img
          className="review_list-iconsic_chevron_left"
          src="icons-ic-chevron-left-1.png"
          alt="icons/ic_chevron_left"
        />
        <div className="review_list-selected">
          <div className="review_list-number publicsans-semi-bold-white-16px">
            <span className="publicsans-semi-bold-white-16px">1</span>
          </div>
        </div>
        <div className="review_list-navbar-linkvalign-text-middle publicsans-normal-charade-16px">
          <span>
            <span className="publicsans-normal-charade-16px">2</span>
          </span>
        </div>
        <div className="review_list-navbar-linkvalign-text-middle publicsans-normal-charade-16px">
          <span>
            <span className="publicsans-normal-charade-16px">3</span>
          </span>
        </div>
        <div className="review_list-navbar-linkvalign-text-middle publicsans-normal-charade-16px">
          <span>
            <span className="publicsans-normal-charade-16px">4</span>
          </span>
        </div>
        <div className="review_list-navbar-linkvalign-text-middle publicsans-normal-charade-16px">
          <span>
            <span className="publicsans-normal-charade-16px">5</span>
          </span>
        </div>
        <div className="review_list-navbar-linkvalign-text-middle publicsans-semi-bold-charade-16px">
          <span>
            <span className="publicsans-semi-bold-charade-16px">…</span>
          </span>
        </div>
        <img
          className="review_list-iconsic_chevron_right"
          src="icons-ic-chevron-right-1.png"
          alt="icons/ic_chevron_right"
        />
      </div>
    );
  }

  export default Pagination;