import React from "react";
import { useState, useEffect } from "react";
import * as Tutor_Component from '../../components/tutor'
import './style.css';
import Review from "../../components/review/Review";
import useTutor from './useTutor';
import { date, timesession } from "../../utils/constant";
import Header from "../../components/header";
import Gmap from "../../components/map";
function Tutor() {
  const { data } = useTutor();

  const userProfileBannerData = data?.userProfileBannerData;

  const userProfileAboutCardData = data?.userProfileAboutCardData;

  const teacherInformation = data?.teacherInformation;

  const [center, setCenter] = useState({ lat: teacherInformation?.latitude, lng: teacherInformation?.longitude })
  const [selectedLocation, setSelectedLocation] = useState();
  const [activeComponent, setActiveComponent] = useState('component1');

  console.log(center);
  const handleBannerClick = (componentName) => {
    setActiveComponent(componentName);
  };

  useEffect(() => {
    if (data?.teacherInformation?.schedules.length > 0) {
      const timesession = data?.teacherInformation?.schedules.map((schedule) => {
        return `${schedule?.day}-${schedule?.start_hour}-${schedule?.end_hour}`
      });
      timesession.forEach((time) => {
        const element = document.querySelector(`.${time}`);
        element?.classList.add('hour-choose');
      });
    }
  });

  return (
    <div>
      <Header />
      <div className="tutor-container-center-horizontal">
        <div className="tutor-tutor-details-2screen">
          <div className="tutor-flex-col">
            {/* <div className="tutor-overlap-group">
              <div className="tutor-shadow"></div>
              <div className="tutor-bg-1"></div>
            </div> */}
            <Tutor_Component.UserProfileBanner {...userProfileBannerData} handleBannerClick={handleBannerClick} />
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
              {/* <Gmap
                center={center}
                setCenter={setCenter}
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
                style={{ height: '185px', width: '461px' }} /> */}
            </div>
            {activeComponent === 'component1' &&
              <Tutor_Component.TeacherInfor
                lang_native={teacherInformation?.lang_native}
                flag={teacherInformation?.flag}
                star={teacherInformation?.star}
                rated_count={teacherInformation?.rated_count}
                price={teacherInformation?.price}
                time={teacherInformation?.time}
                phone={teacherInformation?.phone}
                resume_url={teacherInformation?.resume_url}
                gmail={teacherInformation?.gmail}
                website_url={teacherInformation?.website_url}
                facebook_url={teacherInformation?.facebook_url}
                instagram_url={teacherInformation?.instagram_url}
                linkedin_url={teacherInformation?.linkedin_url}
                twitter_url={teacherInformation?.twitter_url}
              />
            }
            {activeComponent === 'component2' && <>
              <div className="frame-43-tutor " style={{ 'min-width': '720px!important' }} >
                <div className="datepicker">
                  <div className="datepicker-header">
                    <div className="datepicker-col-hour"></div>
                    {date.map((day, index) => (
                      <div className="d-flex">
                        <div key={index} className="datepicker-date-tutor">{day}</div>
                      </div>
                    ))}
                  </div>

                  {timesession.map((item, index) => (
                    <div className="datepicker-timerow">
                      <div className="datepicker-col-hour">
                        <span className="pickhour">{item.time}時</span>
                        <div className="picksession">
                          <span>{item.ss}</span>
                        </div>
                      </div>
                      {date.map((day, index) => (
                        <div className="d-flex">
                          <div key={index} className={`date-hour-tutor ${day}-${item.time}`}></div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>}
            {activeComponent === 'component3' && <Review />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutor;
