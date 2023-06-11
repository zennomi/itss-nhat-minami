import React from "react";
import { useState } from "react";
import * as Tutor_Component from '../../components/tutor'
import './style.css';
import useTutor from './useTutor';

function Tutor() {
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
      {activeComponent === 'component3' && <spanText1>Đây là review</spanText1>}
            
        </div>
      </div>
    </div>
  );
}

export default Tutor;