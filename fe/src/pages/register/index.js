import React from 'react';
import './style.css';
import Form from "../../components/form";
import USER from "../../services/userService";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";

const Register = () => {
    let navigate = useNavigate();
    const callback = (message) => {
        if (message === "USER_CREATED")
            navigate('/');
    }
    return (
        <div>
            <Header></Header>
        <div className="register-container">
            <div className="register-register">
                <div className="register-logo">
                    <img
                        src="/images/logo.svg"
                        alt="Logo17403"
                        className="register-logo1"
                    />
                </div>
                <div className="register-register1">
                    <div className="register-auth-banner">
                        <div className="register-bg">
                            <img
                                src="/images/img.png"
                                alt="overlayI1740"
                                className="register-overlay"
                            />
                        </div>
                        <div className="register-content">
                            <span className="register-text H3">
                                <span>こんにちは</span>
                            </span>
                            <div className="register-illustrationsillustrationdashboard">
                                <img
                                    src="/images/imgi1740-boyd-600h.png"
                                    alt="imgI1740"
                                    className="register-img1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="register-stack">
                        <div className="register-auth-form-register">
                            <div className="register-head">
                                <span className="register-text02 H4">
                                    <span>無料でスタート</span>
                                </span>
                                <span className="register-text04">
                                    <span className="register-text05">
                                        アカウントつくった?
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>ログイン</span>
                                </span>
                            </div>
                            <div className="register-content1">
                                <div className="register-stack1">
                                    <div className="register-text-field">
                                        <input
                                            type="text"
                                            placeholder="氏名"
                                            className="register-input"
                                        />
                                    </div>
                                </div>
                                <div className="register-text-field1">
                                    <input
                                        type="text"
                                        placeholder="メールアドレス"
                                        className="register-input1"
                                    />
                                </div>
                                <div className="register-text-field2">
                                    <div className="register-input2">
                                        <span className="register-text07 Body1">
                                            <span>パスワード</span>
                                        </span>
                                        <div className="register-endadornment">
                                            <button className="register-icon-button">
                                                <img
                                                    src="/images/iconsiceyei1740-9136.svg"
                                                    alt="iconsiceyeI1740"
                                                    className="register-iconsiceye"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <button className="register-button">
                                    <span className="register-text09 ComponentsButtonLarge">
                                        <span>アカウン作る</span>
                                    </span>
                                </button>
                                <span className="register-text11">
                                    <span className="register-text12">
                                        ここをクリックして進むか、サインアップをすることで
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span className="register-text13">
                                        定期レッスン購入に関する条項を含んだ利用規約
                                    </span>
                                    <span className="register-text14">
                                        {' '}
                                        と
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span className="register-text15">
                                        プライバシーポリシー
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: ' ',
                                            }}
                                        />
                                    </span>
                                    <span>に同意します。</span>
                                </span>
                                <div className="register-divider">
                                    <img
                                        src="/images/divideri1740.svg"
                                        alt="DividerI1740"
                                        className="register-divider1"
                                    />
                                    <span className="register-text17 Overline">
                                        <span>OR</span>
                                    </span>
                                    <img
                                        src="/images/divideri1740.svg"
                                        alt="DividerI1740"
                                        className="register-divider2"
                                    />
                                </div>
                                <div className="register-stack2">
                                    <button className="register-icon-button1">
                                        <img
                                            src="/images/iconsicgooglei1740-rs4j.svg"
                                            alt="iconsicgoogleI1740"
                                            className="register-iconsicgoogle"
                                        />
                                    </button>
                                    <button className="register-icon-button2">
                                        <img
                                            src="/images/iconsicfacebbooki1740-ni8j.svg"
                                            alt="iconsicfacebbookI1740"
                                            className="register-iconsicfacebbook"
                                        />
                                    </button>
                                    <button className="register-icon-button3">
                                        <img
                                            src="/images/iconsictwitteri1740-bv9j.svg"
                                            alt="iconsictwitterI1740"
                                            className="register-iconsictwitter"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register;
