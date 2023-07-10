import React from "react";
import "./style.css";
import Header from "../../components/header";
import { Link, useNavigate } from "react-router-dom";
function Home() {
    return (
        <div className="main-pagescreen">
            <Header />
            <div className="home-hero">
                <div className="bg">
                    <div className="overlay-container">
                        <Backgroundoverlay2 src={"/images/img.png"} />
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="ellipses">
                    <div className="ellipse"></div>
                    <div className="ellipse-1"></div>
                </div>
                <div className="grid grid-cols-2">
                    <div className="content">
                        <div className="head">
                            <div className="text">
                                <h1 className="start-a-new-project">
                                    {<React.Fragment>
                                        Minami
                                        <br />
                                        Sensei
                                    </React.Fragment>}
                                </h1>
                            </div>
                            <div className="start-a-new-project-1">
                                {<React.Fragment>
                                    あなたにあった
                                    <br />
                                    教師を探そう！
                                </React.Fragment>}
                            </div>
                        </div>
                        <div className="stack">
                            <div className="stack-1">
                                <Link to="/search">
                                    <Button5 label={"教師を探す"} />
                                </Link>
                                {/*<div className="link">*/}
                                {/*    <img className="icons external-link" src="/images/icons-external-link.svg"*/}
                                {/*         alt="icons/external-link"/>*/}
                                {/*    <div className="the-starting-point-f">*/}
                                {/*        {"ログイン"}*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <Button6 label={"教師になる"} />
                        </div>
                        <div className="stack-2">
                            <div className="the-starting-point-f-1 publicsans-bold-charade-12px">
                                {"CODE BY"}
                            </div>
                            <div className="stack-3">
                                <img
                                    className="icons platformsic"
                                    src="/images/icons-platforms-ic-sketch.svg"
                                    alt="icons/platforms/ic_sketch"
                                />
                                <img className="icons platformsic" src="/images/icons-platforms-ic-figma.svg"
                                    alt="icons/platforms/ic_figma" />
                                <img className="icons platformsic" src="/images/icons-platforms-ic-js.svg"
                                    alt="icons/platforms/ic_js" />
                                <img className="icons platformsic" src="/images/icons-platforms-ic-ts.svg"
                                    alt="icons/platforms/ic_ts" />
                                <img
                                    className="icons platformsic"
                                    src="/images/icons-platforms-ic-nextjs.svg"
                                    alt="icons/platforms/ic_nextjs"
                                />
                            </div>
                        </div>
                    </div>
                    <img className="webinar-pana-1" src={"/images/webinar-pana-1.png"} alt="Webinar-pana 1" />
                </div>
            </div>
        </div>
    );
}

function MainHeader() {

    return (
        <div className="main-header">
            <div className="overlap-group">
                <div className="bg-1"></div>
                <div className="content-1">
                    <img className="logo" src="/images/logo.svg" alt="Logo" />
                    <div className="links publicsans-semi-bold-charade-14px">
                        <div className="links-item">
                            ホーム
                        </div>
                        <div className="links-item">
                            教師を探す
                        </div>
                        <div className="link-1">
                            <div className="dashboard publicsans-semi-bold-jade-14px">
                                言語
                            </div>
                            <img
                                className="icons ic_chevron_left"
                                src="/images/icons-ic-chevron-left.svg"
                                alt="icons/ic_chevron_left"
                            />
                            <div className="ellipse-9"></div>
                        </div>
                        <Button label={"ログイン"} />
                        <div className="links-item">
                            教師になる
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Button(props) {
    const { label } = props;

    return (
        <div className="button">
            <img className="start-icon" src="/images/start-icon-1.svg" alt="start icon" />
            <div className="label valign-text-middle publicsans-bold-white-14px">
                {label}
            </div>
        </div>
    );
}

function Backgroundoverlay2(props) {
    const { src } = props;

    return (
        <div className="background overlay_2">
            <img className="img" src={src} alt="img" />
        </div>
    );
}

function Button5(props) {
    const { label } = props;

    return (
        <div className="button-1 no-underline">
            <img className="iconsic_flash" src="/images/icons-ic-flash.svg" alt="icons/ic_flash" />
            <div className="publicsans-bold-white-15px" >
                {label}
            </div>
        </div>
    );
}

function Button6(props) {
    const { label } = props;

    return (
        <div className="button-2 px-[22px] py-[11px] min-h-0 h-auto">
            <img className="start-icon-1" src="/images/start-icon.svg" alt="start icon" />
            <div className="label-2">
                {label}
            </div>
        </div>
    );
}

export default Home;
