import React from "react";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TeacherCard = () => {
    return (
        <div>
            <div className="teacherCard">
                <div className="overlap-group2">
                    <div className="overlap-group1">
                        <img src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=" alt=""></img>
                        <div className="overlay-solid">
                        </div>
                        <div className="overlap-group">
                            <div className="avatar" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI=)` }}>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div>Aizawa Minami</div>
                        <div>韓国</div>
                    </div>
                    <div className="contactWrapper">
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon="fa-solid fa-phone" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerItem">
                        <div>
                            評点
                        </div>
                        <div>
                            5
                        </div>
                    </div>
                    <div className="footerItem">
                        <div>
                            レビュー
                        </div>
                        <div>
                            34
                        </div>
                    </div>
                    <div className="footerItem">
                        <div>
                            料金
                        </div>
                        <div>
                            5000¥
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TeacherCard
