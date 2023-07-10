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
    <div className="pb-5">
      <Header />
      <div className="mt-[120px] px-5">
        <Tutor_Component.UserProfileBanner {...userProfileBannerData} handleBannerClick={handleBannerClick} />
        <div className="grid grid-cols-3">
          <div className="py-3 flex flex-col gap-y-4 pr-3">
            <Tutor_Component.UserProfileAboutCard
              description={userProfileAboutCardData?.description}
              address={userProfileAboutCardData?.address}
              gender={userProfileAboutCardData?.gender}
              lang_native={userProfileAboutCardData?.lang_native}
              certificates={userProfileAboutCardData?.certificates}
            />
            {/* map */}
            <div className="rounded-2xl overflow-hidden">
              {(teacherInformation?.latitude && teacherInformation?.longitude) ? (
                <div className="h-[200px] w-full">
                  <Map
                    latitude={teacherInformation?.latitude}
                    longitude={teacherInformation?.longitude}
                    clickable={false}
                  />
                </div>) : (<div />)
              }
            </div>
          </div>
          <div className="col-span-2 py-3">
            {activeComponent === 'component1' &&
              <Tutor_Component.TeacherInfor
                lang_native={teacherInformation?.lang_native}
                lang_study={teacherInformation?.lang_study}
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
              <div className="frame-43-tutor w-full py-3" >
                <div className="datepicker">
                  <div className="datepicker-header">
                    <div className="datepicker-col-hour"></div>
                    {date.map((day, index) => (
                      <div className="flex w-full">
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
                        <div className="flex w-full">
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
