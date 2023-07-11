import React, { useMemo } from "react";
import './style.css'
import { useNavigate, Link } from "react-router-dom";
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
            toast.success('ログアウト');
            navigate('/login')
        } catch (e) {
            toast.error('Logout failed');
        }
    }
    return (
        <div className="main-header w-full">
            <div className="header-content w-full">
                <div className="header-wrap flex items-center justify-between w-full mt-4">
                    <div className="ml-5">
                        <Link to="/">
                            <img className="logo-header" src="../images/logo.svg" alt="Logo" />
                        </Link>
                    </div>
                    <div className="link publicsans-semi-bold-charade-14px content-right mr-5">
                        <div className="home" onClick={() => {
                            navigate(
                                "/"
                            )
                        }}>
                            <span className="publicsans-semi-bold-charade-14px " style={{ cursor: 'pointer' }}>ホーム</span>
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
                                            <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon" />
                                            <div className="labelvalign-text-middlepublicsans-bold-white-14px">
                                                <span className="publicsans-bold-white-14px">ブックマークリスト</span>
                                            </div>
                                        </button>
                                    </>
                                )

                                :
                                (<button className="button-header" onClick={() => {
                                    navigate(
                                        "/login"
                                    )
                                }}>
                                    <img className="start-icon" src="../images/start-icon-1.svg" alt="start icon" />
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
