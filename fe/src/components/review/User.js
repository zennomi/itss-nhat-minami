import React from "react";
import "./style_review_list.css";
const User = (props) => {
  const { name, review_day, avatar_url } = props;

  return (
    <div className="review_list-user-1 review_list-user">
      <div
        className="review_list-avatar"
        style={{ backgroundImage: `url(${avatar_url})` }}
      ></div>
      <div className="review_list-text">
        <div className="review_list-name4 publicsans-semi-bold-charade-14px">
          <span className="review_list-span-1 publicsans-semi-bold-charade-14px">
            {name}
          </span>
        </div>
        <div className="review_list-dd_mmm_yyyy4 publicsans-normal-pale-sky-12px">
          {/* <span className="review_list-span-1 publicsans-normal-pale-sky-12px">
            {review_day}
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default User;
