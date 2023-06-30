import React from "react";
import '../../pages/tutor/style.css';
import Info from "./Info";
const UserProfileAboutCard = (props) => {
  const {
    description,
    address,
    gender,
    lang_native,
    certificates,
  } = props;

  return (
    <div className="tutor-user-profile-about-card">
      <div className="tutor-text">
        <div className="tutor-title publicsans-bold-charade-18px">
          <span className="publicsans-bold-charade-18px">About</span>
        </div>
      </div>
      <div className="tutor-x">
        <span className="publicsans-normal-charade-14px">{description}</span>
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
        {certificates && certificates.map((item, index) => (
          <Info
            key={index}
            iconsIc_Location="https://www.freeiconspng.com/uploads/building-icon-16.png"
            spanText={`${item.language_code}: ${item.level}`}
            className="tutor-x-item"
          />))}
      </div>
    </div>
  );
}

export default UserProfileAboutCard