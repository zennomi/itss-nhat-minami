import React from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
function Header() {
    const navigate = useNavigate();
    return (
        <div className="main-header">
            <div className="header-content">
            <div className="header-wrap">
                    <img className="logo-header" src="../images/logo.svg" alt="Logo" />
                    <div className="link publicsans-semi-bold-charade-14px content-right">
                        <div className="home">
                            <span className="publicsans-semi-bold-charade-14px">ホーム</span>
                        </div>
                        <div className="find-tutors">
                            <span  className="publicsans-semi-bold-charade-14px">教師を探す</span>
                        </div>
                        <div className="link">
                            <div className="dot-logo"></div>
                            <div className="dashboardpublicsans-semi-bold-jade-14px">
                                <span className="publicsans-semi-bold-jade-14px">言語</span>
                            </div>
                            <img
                                className="iconsic_chevron_left-header"
                                src="../images/icons-ic-chevron-left.svg"
                                alt="icons/ic_chevron_left"
                            />
                        </div>
                        <div className="button-header">
                            <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon" />
                            <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                <span>
                  <span className="publicsans-bold-white-14px">ログイン</span>
                </span>
                    </div>
                        </div>
                        <div className="find-tutors" onClick={() => {
                            navigate(
                                "/profile/1"
                            )
                        }}>
                            <span className="publicsans-semi-bold-charade-14px">教師になる</span>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Header;
