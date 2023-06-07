import React from "react";
import '../../pages/tutor/style.css';
import Info from "./Info";
const UserProfileAboutCard = (props) => {
    const {
      spanText1,
      spanText2,
      address,
      gender,
      lang_native,
      level,
    } = props;
  
    return (
      <div className="tutor-user-profile-about-card">
        <div className="tutor-text">
          <div className="tutor-title publicsans-bold-charade-18px">
            <span className="publicsans-bold-charade-18px">{spanText1}</span>
          </div>
        </div>
        <div className="tutor-x">
          <div className="tutor-x-1 publicsans-normal-charade-14px">
            <span className="publicsans-normal-charade-14px">{spanText2}</span>
          </div>
          <Info
            iconsIc_Location="https://cdn-icons-png.flaticon.com/512/64/64113.png"
            spanText={address}
            className="tutor-x-item"
          />
          <Info
            iconsIc_Location="https://cdn-icons-png.flaticon.com/512/506/506023.png"
            spanText={gender}
            className="tutor-x-item"
          />
          <Info
            iconsIc_Location="https://www.freeiconspng.com/uploads/building-icon-16.png"
            spanText={lang_native}
            className="tutor-x-item"
          />
          <Info
            iconsIc_Location="https://www.freeiconspng.com/uploads/building-icon-16.png"
            spanText={level}
            className="tutor-x-item"
          />
        </div>
      </div>
    );
  }

  export default UserProfileAboutCard