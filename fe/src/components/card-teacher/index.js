import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';
function TeacherCard ({ data }) {
    return (
        <div>
            <div className="teacherCard w-full sticky">
                <div className="group2">
                    <div className="group1">
                        <img src={data.background_image_url} alt="" className="w-full"></img>
                        <div className="overlay-solid">
                        </div>
                        <div className="absolute top-[154px] w-full flex justify-center">
                            <div className="avatar" style={{ backgroundImage: `url(${data.photo_url})` }}>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="font-bold text-xl">{data.name}</div>
                        <div>{data.country_of_birth}</div>
                    </div>
                    <div className="contactWrapper">
                        <div className="icon">
                            <i className="fa-solid fa-phone" style={{color: '#F0AB00'}}></i>
                        </div>
                        <div className="icon">
                            <Icon icon="logos:google-gmail" />
                        </div>
                        <div className="icon">
                            <i className="fa-solid fa-address-book" style={{color: '#52C3FF'}}></i>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-facebook-f" style={{color: '#1465f0'}}></i>
                        </div>
                        <div className="icon">
                            <Icon icon="skill-icons:instagram" />
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-linkedin-in" style={{color: '#007EBB'}}></i>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-twitter" style={{color: '#00AAEC'}}></i>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerItem">
                        <div className="font-bold">
                            <span>評点</span>
                        </div>
                        <div>
                            <span className="footerItem-result" style={{color:'#212B36'}}>{data?.star?.toFixed(1)}</span>
                            <i className="fa-solid fa-star fa-lg" style={{color: '#f5d60f'}} ></i>
                        </div>
                    </div>
                    <div className="footerItem">
                        <div className="font-bold">
                            <span> レビュー</span>
                        </div>
                        <div>
                            <span className="footerItem-result" style={{color:'#212B36'}}>{data.reviewCount}</span>
                        </div>
                    </div>
                    <div className="footerItem">
                        <div className="font-bold">
                            <span>料金</span>
                        </div>
                        <div>
                            <span className="footerItem-result" style={{color:'#212B36'}}>{data.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TeacherCard
