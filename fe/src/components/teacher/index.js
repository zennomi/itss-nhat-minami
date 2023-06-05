import React from "react";
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Teacher() {
    return (
        <div className="frame-1">
            {/*avt */}
            <img
                className="x335913644_9819789628"
                src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI%3D&fbclid=IwAR2LyOl7qFuCBH0ZV5XoL0vZKT4aVBlx8kSfQ9M_ItZoND_HMcCmxBF2tdo"
                alt="335913644_981978962817391_6054761902614117248_n 1"
            />
            {/*cục bên phải */}
            <div className="frame-2">
                <div className="frame-3">
                    <div className="aizawa-minamipublicsans-semi-bold-black-16px">
                        <span className="publicsans-semi-bold-black-16px" >Aizawa Minami</span>
                    </div>
                    <div className="iconsflagsic_kr"></div>
                    <div className="button-x">

                        <div className="labelpublicsans-bold-white-13px">
                            <span className="model" >オンラインレッスン</span>
                        </div>
                    </div>
                </div>
                <div className="overlap-group-1">
                    <div className="frame-8">
                        <div className="button-x1">
                            <i className="fa-solid fa-user-group" style={{color:'rgb(255, 86, 48)'}}></i>
                            <div className="label-1publicsans-bold-white-13px">
                                <span className="publicsans-bold-black-13px sex">女性</span>
                            </div>
                        </div>
                        <div className="button-2">
                            <i className="fa-solid fa-circle-exclamation" style={{color: '#000000'}}></i>
                            <div className="label-2publicsans-bold-charade-13px">
                                <span className="publicsans-bold-charade-13px">20 歳</span>
                            </div>
                        </div>
                        <div className="button-3">
                            <i className="fa-solid fa-location-dot" style={{color: '#000000'}}></i>
                            <div className="label-3publicsans-bold-charade-13px">
                                <span className="publicsans-bold-charade-13px" >ハーノイ</span>
                            </div>
                        </div>
                    </div>
                    <div className="x2publicsans-normal-pale-sky-14px">
            <span className="publicsans-normal-pale-sky-14px">
              2年間の経験と資格を持つ認定講師 はじめまして、TuMyと申します。
              私はベトナム南部から来ました。師範大学の日本語学部を卒業して、5年間の教育経験があります。特に3年間、子供を教えました。教師の仕事が好きで、世界の友達を作りたいです。2016-2017：日本センターで大人に教えました。2018-2022：日本センターで子供に教えました…
            </span>
                    </div>
                </div>
            </div>
            {/*cục giá + đánh giá */}
            <Frame5 />
        </div>
    );
}

export default Teacher;

function Frame5() {
    return (
        <div className="frame-5">
            <div className="frame-10">
                <div className="overlap-group">
                    <div className="frame-6">
                        <i className="fa-solid fa-star fa-lg" style={{color: '#f5d60f'}} ></i>
                        <div className="numberpublicsans-bold-black-14px">
                            <span className="publicsans-bold-black-14px">5</span>
                        </div>
                    </div>
                    <div className="addresspublicsans-semi-bold-black-14px">
                        <span className="publicsans-semi-bold-black-14px">34 レビー</span>
                    </div>
                </div>
                <div className="frame-9">
                    <span className="pricepublicsans-bold-black-24px">
                        <span className="publicsans-bold-black-24px">5000¥</span>
                    </span>

                    <div className="address-1publicsans-semi-bold-white-14px">
                        <span  className="publicsans-semi-bold-black-14px tx1">50 min / lesson</span>
                    </div>
                </div>
            </div>
            <div className="button-4">
                <i className="fa-solid fa-star" style={{color:'#f0f2f4'}}></i>
                <div className="label-4valign-text-middlepublicsans-bold-white-14px">
          <span>
            <span className="publicsans-bold-white-14px">ブックマーク</span>
          </span>
                </div>
            </div>
            <div className="button-5">
                <i className="fa-solid fa-circle-exclamation" style={{color: '#fafafa'}}></i>
                <div className="label-5valign-text-middlepublicsans-bold-white-14px">
          <span>
            <span className="publicsans-bold-white-14px">さらに読む</span>
          </span>
                </div>
            </div>
        </div>
    );
}
