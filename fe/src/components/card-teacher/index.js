import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from '@iconify/react';
function TeacherCard ({ data }) {
    console.log('aaaaa',data)
    return (
        <div>

            <div className="teacherCard">
                <div className="group2">
                    <div className="group1">
                        <img src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=" alt=""></img>
                        <div className="overlay-solid">
                        </div>
                        <div className="group0">
                            <div className="avatar" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=)` }}>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div>{data.name}</div>
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
                        <div>
                            <span>評点</span>
                        </div>
                        <div>
                            <span className="footerItem-result" style={{color:'#212B36'}}>{data.star}</span>
                        </div>
                    </div>
                    <div className="footerItem">
                        <div>
                            <span> レビュー</span>
                        </div>
                        <div>
                            <span className="footerItem-result" style={{color:'#212B36'}}>{data.reviewCount}</span>
                        </div>
                    </div>
                    <div className="footerItem">
                        <div>
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
