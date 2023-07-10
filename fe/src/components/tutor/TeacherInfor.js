import React from "react";
import '../../pages/tutor/style.css';
import { Icon } from "@iconify/react";
import { langToFlag } from "../../utils/constant";
const TeacherInfor = (props) => {
  const {
    lang_native,
    lang_study,
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
  console.log({ props })
  return (
    <div className="tutor-flex-col-2">
      <div className="tutor-frame-50">
        <div className="flex gap-x-3 items-center">
          <div className="tutor-frame-51">
            <div className="">
              <Icon className="w-6 h-6" icon={`emojione:flag-for-${langToFlag[lang_native]}`} />
            </div>
            <div className="">
              <span className="">{lang_native}</span>
            </div>
          </div>
          <div className="font-bold">で</div>
          <div className="tutor-frame-51">
            <div className="">
              <Icon className="w-6 h-6" icon={`emojione:flag-for-${langToFlag[lang_study]}`} />
            </div>
            <div className="">
              <span className="">{lang_study}</span>
            </div>
          </div>
          <div className="font-bold">おしえる</div>
        </div>
        <div className="tutor-user-profile-summary-card">
          <div className="tutor-item">
            <div className="tutor-overlap-group-1">
              <div className="tutor-frame-18">
                <Icon icon="twemoji:star" className="w-7 h-7" />
                <div className="tutor-number-short2 publicsans-bold-charade-24px">
                  <span className="publicsans-bold-charade-24px">{star}</span>
                </div>
              </div>
              <div className="tutor-label-3 publicsans-normal-pale-sky-14px text-center w-full">
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
              <span className="publicsans-normal-pale-sky-14px">{time * 60} min / lesson</span>
            </div>
          </div>
        </div>
      </div>
      <div className="tutor-user-profile-social-card">
        <div className="tutor-user-profile-social-card-item">
          <div className="tutor-x-3">
            <Icon icon="eva:phone-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <span className="publicsans-normal-charade-14px">{phone}</span>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:file-text-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={resume_url} target="_blank">{resume_url}</a>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:email-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <span className="publicsans-normal-charade-14px">{gmail}</span>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:globe-2-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={website_url} target="_blank">{website_url}</a>
            </div>
          </div>
        </div>
        <div className="tutor-user-profile-social-card-item">
          <div className="tutor-x-3">
            <Icon icon="eva:facebook-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={facebook_url} target="_blank">{facebook_url}</a>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:image-2-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={instagram_url} target="_blank">{instagram_url}</a>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:linkedin-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={linkedin_url} target="_blank">{linkedin_url}</a>
            </div>
          </div>
          <div className="tutor-x-3">
            <Icon icon="eva:twitter-fill" className="h-5 w-5" />
            <div className="tutor-text-2 publicsans-normal-charade-14px">
              <a className="publicsans-normal-charade-14px" href={twitter_url} target="_blank">{twitter_url}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TeacherInfor;