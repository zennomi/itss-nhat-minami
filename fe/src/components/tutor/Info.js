import React from "react";
import '../../pages/tutor/style.css';

const Info = (props) => {
    const { iconsIc_Location, spanText, className } = props;
  
    return (
      <div className={`tutor-x-2 ${className || ""}`}>
        <img className="tutor-icon-1" src={iconsIc_Location} alt="icons/ic_location" />
        <div className="tutor-text-1 publicsans-normal-charade-14px">
          <span className="tutor-span-2 publicsans-normal-charade-14px">{spanText}</span>
        </div>
      </div>
    );
  }

  export default Info;