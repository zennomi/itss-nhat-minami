import React from "react";
import { useNavigate } from "react-router-dom";
import './teacher.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import { addBookmark } from "../../services/teacherService";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import { langToFlag } from "../../utils/constant";

const calculatorDate = (time) => {
    const currentDate = new Date();
    var dateofBirth = new Date(time)

    let age = currentDate.getFullYear() - dateofBirth.getFullYear();

    if (currentDate.getMonth() < dateofBirth.getMonth() ||
        (currentDate.getMonth() === dateofBirth.getMonth() && currentDate.getDate() < dateofBirth.getDate())) {
        age--;
    }
    return age;
}

function Teacher({ data }) {
    const navigate = useNavigate();

    const { id } = data;

    const user_id = localStorage.getItem('id');

    const handleAddBookmark = async () => {
        try {
            const res = await addBookmark({
                teacher_id: id,
                user_id: Number(user_id)
            });
            toast.success('Add bookmark success')
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return (
        <div className="frame-1 w-full">
            {/*avt */}
            <img
                className="x335913644_9819789628"
                src={data.photo_url}
                alt=""
            />
            {/*cục bên phải */}
            <div className="frame-2 w-full" style={{
                'cursor': 'pointer'
            }}>
                <div className="frame-3">
                    <div className="aizawa-minamipublicsans-semi-bold-black-16px">
                        <span className="publicsans-semi-bold-black-16px" >{data.name}</span>
                        <VerifiedIcon style={{ color: '#09d356', 'font-size': '18px', 'margin-left': '14px' }}></VerifiedIcon>
                        {data.remote === 1 ?
                            <span className="publicsans-semi-bold-jade-13px" style={{ 'margin-left': '8px' }}>オンラインレッスン </span>
                            :
                            <span className="publicsans-semi-bold-jade-13px" style={{ 'margin-left': '8px' }}>オフラインレッスン </span>
                        }
                    </div>
                    {
                        data.lang_teach &&
                        <Icon icon={`emojione:flag-for-${langToFlag[data.lang_teach]}`} />
                    }

                    <div className="button-x">

                        <div className="labelpublicsans-bold-white-13px">
                            <span className="model" ></span>
                        </div>
                    </div>
                </div>
                <div className="teacher-result-right">
                    <div className="frame-8">
                        <div className="button-x1">
                            <i className="fa-solid fa-user-group" style={{ color: 'rgb(255, 86, 48)' }}></i>
                            <div className="label-1publicsans-bold-white-13px">
                                <span className="publicsans-bold-black-13px sex">{data.gender}</span>
                            </div>
                        </div>
                        <div className="button-2">
                            <i className="fa-solid fa-circle-exclamation" style={{ color: '#000000' }}></i>
                            <div className="label-2publicsans-bold-charade-13px">
                                <span className="publicsans-bold-charade-13px">{calculatorDate(data.date_of_birth)} 歳</span>
                            </div>
                        </div>
                        <div className="button-3">
                            <i className="fa-solid fa-location-dot" style={{ color: '#000000' }}></i>
                            <div className="label-3publicsans-bold-charade-13px">
                                <span className="publicsans-semi-bold-black-16px" >{data.country_of_birth}</span>
                            </div>
                        </div>
                    </div>
                    <div className="x2publicsans-normal-pale-sky-14px">
                        {data.description !== "null" &&
                            <span className="publicsans-normal-pale-sky-14px">
                                {data.description}
                            </span>
                        }
                    </div>
                </div>
            </div>
            {/*cục giá + đánh giá */}
            <div className="frame-5">
                <div className="frame-10">
                    <div className="result-right">
                        <div className="frame-6">
                            <i className="fa-solid fa-star fa-lg" style={{ color: '#f5d60f' }} ></i>
                            <div className="numberpublicsans-bold-black-14px">
                                <span className="publicsans-bold-black-14px">{data?.star?.toFixed(1) || "..."}</span>
                            </div>
                        </div>
                        <div className="numberpublicsans-bold-black-14px">
                            <span className="publicsans-semi-bold-charade-16px whitespace-nowrap">{data.reviewCount}レビュー</span>
                        </div>
                    </div>
                    <div className="frame-9">
                        <span className="pricepublicsans-bold-black-24px">
                            <span className="publicsans-bold-black-24px">{data.price}¥</span>
                        </span>

                        <div className="address-1publicsans-semi-bold-white-14px">
                            <span className="publicsans-semi-bold-black-14px tx1 whitespace-nowrap">{data.hours * 60} min / lesson</span>
                        </div>
                    </div>
                </div>
                <div className="button-4" onClick={handleAddBookmark}>
                    <i className="fa-solid fa-star" style={{ color: '#f0f2f4' }}></i>
                    <div className="label-4valign-text-middlepublicsans-bold-white-14px">
                        <span>
                            <span className="publicsans-bold-white-14px">ブックマーク</span>
                        </span>
                    </div>
                </div>
                <div className="button-5" onClick={() => navigate(`/tutor/${id}`)}>
                    <i className="fa-solid fa-circle-exclamation" style={{ color: '#fafafa' }}></i>
                    <div className="label-5valign-text-middlepublicsans-bold-white-14px">
                        <span>
                            <span className="publicsans-bold-white-14px">さらに読む</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teacher;
