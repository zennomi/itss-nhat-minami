import React from "react";
import './style.css';
import * as Tutor_Component from '../../components/tutor'
import { useState } from "react";
function Tutor() {
    const userProfileBannerData = {
    bg: "https://avatar-ex-swe.nixcdn.com/song/share/2018/11/28/a/8/9/d/1543375304395.jpg",
    img_Avatar25: "https://yt3.googleusercontent.com/1zfw02lxzOj9zZZf-v5ga_tRbtZQb0urGYNjUP9Hiir7F_rcC3LUCjHbW4peIwszzejy8zRr=s900-c-k-c0x00ffffff-no-rj",
    spanText1: "Aizawa Minami",
    spanText2: "韓国語"
    };

    const userProfileAboutCardData = {
    address: "ソウル、韓国",
    gender: "女性",
    lang_native: "韓国語: Native",
    level: "英語: IELTS 8+",
    };

    const teacherInformation = {
        lang_native: "korean",
        flag: "https://img.uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/south-korea-flag-icon.png",
        star: "4",
        rated_count: "8k",
        price: "50",
        time: "30",
        phone: "0972521125",
        resume_url: "https/resume/me",
        gmail: "duchuy01@gmail.com",
        website_url: "https/huy",
        facebook_url: "https/facebook/huy",
        instagram_url: "https/instagram/huy",
        linkedin_url: "https/linkedin/huy",
        twitter_url: "https/twitter/huy"
    }
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
              address={userProfileAboutCardData.address}
              gender={userProfileAboutCardData.gender}
              lang_native={userProfileAboutCardData.lang_native}
              level={userProfileAboutCardData.level}
            />
            {/* map */}
            <img className="tutor-image-4" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg" alt="image 4" />
          </div>
          {activeComponent === 'component1' && 
          <Tutor_Component.TeacherInfor 
                lang_native = {teacherInformation.lang_native}
                flag = {teacherInformation.flag}
                star = {teacherInformation.star}
                rated_count = {teacherInformation.rated_count}
                price = {teacherInformation.price}
                time = {teacherInformation.time}
                phone = {teacherInformation.phone}
                resume_url = {teacherInformation.resume_url}
                gmail = {teacherInformation.gmail}
                website_url = {teacherInformation.website_url}
                facebook_url = {teacherInformation.facebook_url}
                instagram_url = {teacherInformation.instagram_url}
                linkedin_url = {teacherInformation.linkedin_url}
                twitter_url = {teacherInformation.twitter_url}
            />
            }
      {activeComponent === 'component2' && <spanText1>Đây là lịch</spanText1>}
      {activeComponent === 'component3' && <spanText1>Đây là review</spanText1>}
            
        </div>
      </div>
    </div>
  );
}

export default Tutor;