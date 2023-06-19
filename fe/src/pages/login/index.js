import React from 'react';
import './style.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-login">
                <div className="login-logo">
                    <img
                        src="/images/logo.svg"
                        alt="Logo17403"
                        className="login-logo1"
                    />
                </div>
                <div className="login-login1">
                    <div className="login-auth-banner">
                        <div className="login-content">
                            <span className="login-text H3">
                                こんにちは
                            </span>
                            <div className="login-illustrationsillustrationdashboard">
                                <img
                                    src="/images/login.png"
                                    alt="imgI1740"
                                    className="login-img1"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="login-stack">
                        <div className="login-auth-form-login">
                            <div className="login-head">
                                <span className="login-text02 H4">
                                    ログイン
                                </span>
                                <span className="login-text04">
                                    新しいメンバー?
                                    <span>アカウント作る</span>
                                </span>
                            </div>
                            <div className="login-content1">
                                <div className="login-text-field">
                                    <div className="login-input">
                                        <span className="login-text07 Body1">
                                        </span>
                                        <div className="login-labelfocus">
                                            <img
                                                src="/images/masklabeli1740-6dx7-200h.png"
                                                alt="masklabelI1740"
                                                className="login-masklabel"
                                            />
                                            <span className="login-text09 ComponentsTextFieldLabel">
                                                <span>メールアドレス</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="login-text-field1">
                                    <div className="login-input1">
                                        <span className="login-text11 Body1">
                                            <span>パスワード</span>
                                        </span>
                                        <div className="login-endadornment">
                                            <button className="login-icon-button">
                                                <img
                                                    src="/images/iconsiceyei1740-8qoq.svg"
                                                    alt="iconsiceyeI1740"
                                                    className="login-iconsiceye"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <span className="login-text13 UnderlineBody2">
                                    <span>パスワードを忘れた?</span>
                                </span>
                                <button className="login-button">
                                    <span className="login-text15 ComponentsButtonLarge">
                                        <span>ログイン</span>
                                    </span>
                                </button>
                                <div className="login-divider">
                                    <img
                                        src="/images/divideri1740.svg"
                                        alt="DividerI1740"
                                        className="login-divider1"
                                    />
                                    <span className="login-text17 Overline">
                                        <span>OR</span>
                                    </span>
                                    <img
                                        src="/images/divideri1740.svg"
                                        alt="DividerI1740"
                                        className="login-divider2"
                                    />
                                </div>
                                <div className="login-stack1">
                                    <button className="login-icon-button1">
                                        <img
                                            src="/images/iconsicgooglei1740-rs4j.svg"
                                            alt="iconsicgoogleI1740"
                                            className="login-iconsicgoogle"
                                        />
                                    </button>
                                    <button className="login-icon-button2">
                                        <img
                                            src="/images/iconsicfacebbooki1740-ni8j.svg"
                                            alt="iconsicfacebbookI1740"
                                            className="login-iconsicfacebbook"
                                        />
                                    </button>
                                    <button className="login-icon-button3">
                                        <img
                                            src="/images/iconsictwitteri1740-bv9j.svg"
                                            alt="iconsictwitterI1740"
                                            className="login-iconsictwitter"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
