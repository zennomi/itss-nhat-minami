import React from "react";
import '../../pages/tutor/style.css';
const TeacherInfor = (props) => {
    const {
        lang_native,
        flag,
        star,
        rated_count,
        price,
        time,
        phone,
        resume_url,
        gmail,
        website_url,
        facebook_url,
        instagram_url,
        linkedin_url,
        twitter_url
    } = props;
    return (
        <div className="tutor-flex-col-2">
            <div className="tutor-frame-50">
              <div className="tutor-frame-51 publicsans-normal-black-14px">
                <div className="tutor-iconsflagsic_kr">
                    <img className="tutor-iconsflagsic_kr" src={flag} alt="flag"/>
                </div>
                <div className="tutor-frame-51-item">
                  <span className="publicsans-normal-black-14px">{lang_native}</span>
                </div>
                <img className="tutor-iconsic_verified" src="https://cdn-icons-png.flaticon.com/512/665/665939.png"/>
                <div className="tutor-frame-51-item">
                  <span className="publicsans-normal-black-14px">Native</span>
                </div>
              </div>
              <div className="tutor-user-profile-summary-card">
                <div className="tutor-item">
                  <div className="tutor-overlap-group-1">
                    <div className="tutor-frame-18">
                      <img className="tutor-icon-star" src="https://img.uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" alt="icon-star" />
                      <div className="tutor-number-short2 publicsans-bold-charade-24px">
                        <span className="publicsans-bold-charade-24px">{star}</span>
                      </div>
                    </div>
                    <div className="tutor-label-3 publicsans-normal-pale-sky-14px">
                      <span className="publicsans-normal-pale-sky-14px">{rated_count} レビュー</span>
                    </div>
                  </div>
                </div>
                <div className="tutor-divider"></div>
                <div className="tutor-item-1">
                  <div className="tutor-number-short31 publicsans-bold-charade-24px">
                    <span className="publicsans-bold-charade-24px">{price}¥</span>
                  </div>
                  <div className="tutor-label-4 publicsans-normal-pale-sky-14px">
                    <span className="publicsans-normal-pale-sky-14px">{time*60} min / lesson</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="tutor-user-profile-social-card">
              <div className="tutor-user-profile-social-card-item">
                <div className="tutor-x-3">
                  <div className="tutor-phone"></div>
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{phone}</span>
                  </div>
                </div>
                <div className="tutor-x-4">
                  <div className="tutor-resume"></div>
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{resume_url}</span>
                  </div>
                </div>
                <div className="tutor-x-5">
                  <div className="tutor-mail"></div>
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{gmail}</span>
                  </div>
                </div>
                <div className="tutor-x-6">
                  <img className="tutor-icon-2" src="https://www.freeiconspng.com/uploads/paper-airplane-icon-23.png" alt="icons/ic_email_sent" />
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{website_url}</span>
                  </div>
                </div>
              </div>
              <div className="tutor-user-profile-social-card-item">
                <div className="tutor-x-7">
                  <img className="tutor-icon-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="icons/ic_facebbook" />
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{facebook_url}</span>
                  </div>
                </div>
                <div className="tutor-x-8">
                  <img className="tutor-icon-2" src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png" alt="icon-instagram" />
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{instagram_url}</span>
                  </div>
                </div>
                <div className="tutor-x-9">
                  <img className="tutor-icon-2" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="icon-linkedin" />
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{linkedin_url}</span>
                  </div>
                </div>
                <div className="tutor-x-10">
                  <img className="tutor-icon-2" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="icon-twitter" />
                  <div className="tutor-text-2 publicsans-normal-charade-14px">
                    <span className="publicsans-normal-charade-14px">{twitter_url}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
}
export default TeacherInfor;