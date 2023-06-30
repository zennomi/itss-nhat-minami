import React from "react";
import { useState, useEffect } from "react";
import * as Tutor_Component from '../../components/tutor'
import './style.css';
import Review from "../../components/review/Review";
import useTutor from './useTutor';
import { date, timesession } from "../../utils/constant";
import Header from "../../components/header";
import Map from "../../components/map";
function Tutor() {
  const { data } = useTutor();
  const userProfileBannerData = data?.userProfileBannerData;
  const userProfileAboutCardData = data?.userProfileAboutCardData;
  const teacherInformation = data?.teacherInformation;

  const [activeComponent, setActiveComponent] = useState('component1');

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
            <div className="tutor-overlap-group">
              <div className="tutor-bg-1"></div>
            </div>
            <Tutor_Component.UserProfileBanner {...userProfileBannerData} handleBannerClick={handleBannerClick} />
          </div>
          <div className="tutor-flex-row">
            <div className="tutor-flex-col-1">
              <Tutor_Component.UserProfileAboutCard
                description={userProfileAboutCardData?.description}
                address={userProfileAboutCardData?.address}
                gender={userProfileAboutCardData?.gender}
                lang_native={userProfileAboutCardData?.lang_native}
                certificates={userProfileAboutCardData?.certificates}
              />
              {/* map */}
              {(teacherInformation?.latitude && teacherInformation?.longitude) ? (
                <div style={{ height: '200px', width: '461px' }}>
                  <Map
                    latitude={teacherInformation?.latitude}
                    longitude={teacherInformation?.longitude}
                    clickable={false}
                  />
                </div>) : (<div />)
              }
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
