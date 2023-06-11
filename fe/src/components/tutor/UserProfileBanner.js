import React from "react";
import '../../pages/tutor/style.css';

const UserProfileBanner = (props) => {
    const { bg = '', img_Avatar25 = '', spanText1 = '', spanText2 = '', handleBannerClick = '' } = props;
  
    return (
      <div className="tutor-user-profile-banner">
        <div className="tutor-overlap-group2">
          <div className="tutor-overlap-group1">
            <div className="tutor-bg" style={{ backgroundImage: `url(${bg})` }}>
              <div className="tutor-overlay-solid"></div>
            </div>
            <div className="tutor-info">
              <div className="tutor-avatar">
                <img className="tutor-img_-avatar25" src={img_Avatar25} alt="Img_Avatar.25" />
              </div>
              <div className="tutor-content">
                <h1 className="tutor-name40 publicsans-bold-white-24px">
                  <span className="publicsans-bold-white-24px">{spanText1}</span>
                </h1>
                <div className="tutor-role40 bevietnam-medium-white-16px">
                  <span className="bevietnam-medium-white-16px">{spanText2}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tutor-tabs">
            <div className="tutor-tab" onClick={() => handleBannerClick('component1')}>
              <img className="tutor-icon" src="https://cdn.onlinewebfonts.com/svg/img_569204.png" alt="icons/ic_profile" />
              <div className="tutor-label publicsans-semi-bold-charade-14px">
                <span className="publicsans-semi-bold-charade-14px">一般情報</span>
              </div>
            </div>
            <div className="tutor-tab-1" onClick={() => handleBannerClick('component2')}>
              <img className="tutor-icon" src="https://cdn.onlinewebfonts.com/svg/img_395492.png" alt="icon" />
              <div className="tutor-label publicsans-semi-bold-pale-sky-14px">
                <span className="publicsans-semi-bold-pale-sky-14px">スケジュール</span>
              </div>
            </div>
            <div className="tutor-tab-2" onClick={() => handleBannerClick('component3')}>
              <img className="tutor-icon-heart" src="https://cdn-icons-png.flaticon.com/512/105/105220.png" alt="icon-heart" />
              <div className="tutor-label-1 publicsans-semi-bold-pale-sky-14px">
                <span className="publicsans-semi-bold-pale-sky-14px">レビュー</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default UserProfileBanner;