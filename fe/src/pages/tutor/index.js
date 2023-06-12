import React from "react";
import { useState } from "react";
import * as Tutor_Component from '../../components/tutor'
import './style.css';
import Review from "../../components/review/Review";
import useTutor from './useTutor';

function Tutor() {
  // new from review
  const review_banner_overview = {
    spanText2: "4/5",
    spanText3: "(8.24k レビュー)",
    star5Count: "25k",
    star4Count: "5k",
    star3Count: "24.5k",
    star2Count: "15k",
    star1Count: "1k",
  };

  const reviewsData_tmp = [
    {
      spanText: "this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1 this is a review 1",
      avatar_url:
        "https://afamilycdn.com/150157425591193600/2020/6/3/dsc5530gallery003-1591191241931219782812.jpg",
      name: "huy",
      review_day:"4月3.2023",
      stars: 4.5,
    },
    {
      spanText: "this is a review 2",
      avatar_url:
        "https://afamilycdn.com/150157425591193600/2020/6/3/dsc5530gallery003-1591191241931219782812.jpg",
      name: "huy 2",
      review_day:"3月3.2022",
      stars: 3.5,
    },
    {
      spanText: "this is a review 3",
      avatar_url:
        "https://afamilycdn.com/150157425591193600/2020/6/3/dsc5530gallery003-1591191241931219782812.jpg",
      name: "huy 3",
      review_day:"6月2.2022",
      stars: 2,
    },
  ];
  // giữ nguyên
  const { data } = useTutor();

  const userProfileBannerData = data?.userProfileBannerData;

  const userProfileAboutCardData = data?.userProfileAboutCardData;

  const teacherInformation = data?.teacherInformation;


  const [activeComponent, setActiveComponent] = useState('component1');

  const handleBannerClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="tutor-container-center-horizontal">
      <div className="tutor-tutor-details-2screen">
        <div className="tutor-flex-col">
          <div className="tutor-overlap-group">
            <div className="tutor-shadow"></div>
            <div className="tutor-bg-1"></div>
          </div>
          <Tutor_Component.UserProfileBanner {...userProfileBannerData} handleBannerClick = {handleBannerClick} />
        </div>
        <div className="tutor-flex-row">
          <div className="tutor-flex-col-1">
            <Tutor_Component.UserProfileAboutCard
              spanText1="About"
              spanText2="2年間の経験と資格を持つ認定講師 はじめまして、TuMyと申します。 私はベトナム南部から来ました。師範大学の日本語学部を卒業して、5年間の教育経験があります。"
              address={userProfileAboutCardData?.address}
              gender={userProfileAboutCardData?.gender}
              lang_native={userProfileAboutCardData?.lang_native}
              level={userProfileAboutCardData?.level}
            />
            {/* map */}
            <img className="tutor-image-4" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg" alt="image 4" />
          </div>
          {activeComponent === 'component1' && 
          <Tutor_Component.TeacherInfor 
                lang_native = {teacherInformation?.lang_native}
                flag = {teacherInformation?.flag}
                star = {teacherInformation?.star}
                rated_count = {teacherInformation?.rated_count}
                price = {teacherInformation?.price}
                time = {teacherInformation?.time}
                phone = {teacherInformation?.phone}
                resume_url = {teacherInformation?.resume_url}
                gmail = {teacherInformation?.gmail}
                website_url = {teacherInformation?.website_url}
                facebook_url = {teacherInformation?.facebook_url}
                instagram_url = {teacherInformation?.instagram_url}
                linkedin_url = {teacherInformation?.linkedin_url}
                twitter_url = {teacherInformation?.twitter_url}
            />
            }
      {activeComponent === 'component2' && <spanText1>Đây là lịch</spanText1>}
      {activeComponent === 'component3' && <Review review_banner_overview={review_banner_overview} reviewsData_tmp={reviewsData_tmp}/>}
            
        </div>
      </div>
    </div>
  );
}

export default Tutor;