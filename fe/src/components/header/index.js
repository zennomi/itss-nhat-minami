import React, { useMemo } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";
import USER from "../../services/userService";
import { toast } from "react-toastify";

function Header() {
    const navigate = useNavigate();
    const token = useMemo(() => localStorage.getItem('token'), []);
    const id = useMemo(() => localStorage.getItem('id'), []);



    const handleLogout = async () => {
        try {
            await USER.logout();
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            toast.success('Logout success');
            navigate('/login')
        } catch (e) {
            toast.error('Logout failed');
        }
    }
    return (
        <div className="main-header">
            <div className="header-content">
                <div className="header-wrap">
                    <img className="logo-header" src="../images/logo.svg" alt="Logo" />
                    <div className="link publicsans-semi-bold-charade-14px content-right">
                        <div className="home" onClick={() =>{
                            navigate(
                                "/"
                            )
                        }}>
                            <span className="publicsans-semi-bold-charade-14px " style={{cursor:'pointer'}}>ホーム</span>
                        </div>
                        <div className="find-tutors" onClick={() => {
                            navigate(
                                "/search"
                            )
                        }}>
                            <span className="publicsans-semi-bold-charade-14px">教師を探す</span>
                        </div>

                        {
                            (token && id) ?
                                (
                                    <>
                                    <div className="link logout" onClick={handleLogout}>
                                    <div className="dashboardpublicsans-semi-bold-jade-14px">
                                        <span className="publicsans-semi-bold-jade-14px">ログアウト</span>
                                    </div>
                                    {/*<img*/}
                                    {/*    className="iconsic_chevron_left-header"*/}
                                    {/*    src="../images/icons-ic-chevron-left.svg"*/}
                                    {/*    alt="icons/ic_chevron_left"*/}
                                    {/*/>*/}
                                    </div>
                                    <button className="button-header" onClick={() => {
                                        navigate(
                                            "/bookmark"
                                        )
                                    }}>
                                        <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>
                                        <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                                            <span className="publicsans-bold-white-14px">ブックマークリスト</span>
                                        </div>
                                    </button>
                                    </>
                                )

                                :
                                ( <button className="button-header" onClick={() => {
                                    navigate(
                                        "/login"
                                    )
                                }}>
                                    <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon"/>
                                    <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                                        <span className="publicsans-bold-white-14px">ログイン</span>
                                    </div>
                                </button>)
                        }
                                <div className="find-tutors" onClick={() => {
                                    {
                                        (token && id) ?
                                            navigate(
                                                `/profile/${id}`
                                            ) : navigate(
                                                "/login"
                                            )
                                    }

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
