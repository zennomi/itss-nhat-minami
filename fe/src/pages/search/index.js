import React from 'react';
import './style.css';
import {Rating,Switch,Button,Slider} from "@mui/material";
import {useState} from "react";
import Pickdaterow from "../../components/pickdaterow";
import Teacher from "../../components/teacher";
import TeacherCard from "../../components/card-teacher";
const Search = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const languages = ['VietNamese','French','Japanese','Chinese','Korean'];
    const purposes = ['試験','会話','ビジネス'];
    const [value, setValue] = useState([20, 80]);
    const prices = ['0¥','2000','4000','6000','8000','10万'];
    const sex =['男性','女性','何でも'];
    const stars = ['4','3','2','1'];
    const date = ['日','月','火','水','木','金','土'];
    const timesession = [{time : '6時 - 9時' , ss : '午前'},{time : '9時 -12時' , ss : '午前'},{time : '12時 - 15時' , ss : '午前'},
        {time : '15時 - 18時' , ss : '午前'},{time : '18時 - 21時' , ss : '午前'}, {time : '21時 - 0時' , ss : '午前'}, {time : '0時 - 3時' , ss : '午前'}];


    return (
        <div>
            <div style={{ margin :'110px 96px' }}>
                <div className="row " style={{padding:'20px 10px','min-width':'1714px','margin':'0'}}>
                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語を習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                               <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                     data-bs-toggle="dropdown" aria-expanded="false">
                                   <span>Vietnamese</span>
                                   <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {languages.map((language, index) => (
                                        <li><span key={index} className="dropdown-item" >{language}</span></li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語を習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>Japanese</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {languages.map((language,index) => (
                                        <label key={index} className="choose dropdown-item">
                                            <input style={{height:'20px','width':'20px','margin':'0 8px 0 0'}} type="checkbox"/>
                                            <span>{language}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">目的？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>試験</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {purposes.map((purpose,index) => (
                                        <label key={index} className="choose dropdown-item">
                                            <input style={{height:'20px','width':'20px','margin':'0 8px 0 0'}} type="checkbox"/>
                                            <span>{purpose}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語を習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>試験</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="price dropdown-menu" >
                                <div className="price-search">
                                        <div className="minmax">
                                            <div className="minmax-item">
                                                <div className="textpublicsans-semi-bold-manatee-14px">
                                                    <span className="publicsans-semi-bold-manatee-14px">Min (¥)</span>
                                                </div>
                                                <div className="x">
                                                    <div className="text-1publicsans-normal-charade-14px">
                                                        <span className="publicsans-normal-charade-14px">2000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="minmax-item">
                                                <div className="text-2publicsans-semi-bold-manatee-14px">
                                                    <span className="publicsans-semi-bold-manatee-14px">Max (¥)</span>
                                                </div>
                                                <div className="x-1">
                                                    <div className="text-3publicsans-normal-charade-14px">
                                                        <span className="publicsans-normal-charade-14px">8000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overlap-group2">
                                            <Slider
                                                getAriaLabel={() => 'Temperature range'}
                                                value={value}
                                                valueLabelDisplay="auto"
                                                step={10}
                                                marks
                                            />
                                        </div>
                                        <div className="navbarpublicsans-normal-manatee-12px d-flex justify-content-between pt-2">
                                            {prices.map((price,index) => (
                                                <div className="navbar-link-text-1">
                                                    <span className="publicsans-normal-manatee-12px">{price}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語を習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>何でも</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div>
                                    <div className="dropdown-menu">
                                        <div >
                                                {sex.map((item,index) => (
                                                    <li><span className="dropdown-item" >{item}</span></li>
                                                ))}
                                        </div>
                                        {/*cục này là chọn tuổi nma kb cho hiển thị */}
                                        {/*<div　className="age">*/}
                                        {/*    <div>*/}
                                        {/*        <span>年齢</span>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="overlap-group2">*/}
                                        {/*        <Slider*/}
                                        {/*            getAriaLabel={() => 'Temperature range'}*/}
                                        {/*            value={value}*/}
                                        {/*            valueLabelDisplay="auto"*/}
                                        {/*            step={10}*/}
                                        {/*            marks*/}
                                        {/*            valueLabelDisplay="on"*/}
                                        {/*        />*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="frame-44">
                    <div className="group-4">
                        <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                            <span className="publicsans-semi-bold-black-16px">評点</span>
                        </div>
                        <div className="dropdown item_dropdown">
                            <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                <span>4 stars & up</span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="dropdown-menu ">
                                {stars.map((star,index) => (
                                    <div className="small-ratings d-flex " style={{cursor:'pointer'}} >
                                        <div className="dropdown-item_1  ">
                                            <Rating
                                                name="text-feedback"
                                                value={star}
                                                readOnly
                                                precision={0.5}
                                            />
                                        </div>
                                        <span> & Up</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="group-6">
                        <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                            <span className="publicsans-semi-bold-black-16px">自分の自由な時間</span>
                        </div>
                        <div className="dropdown item_dropdown">
                            <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                              data-bs-toggle="dropdown" aria-expanded="false">
                                <span>日: 夜; 月: 午後; 火: 午後遅く;水: 夕方..."</span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="frame-43 dropdown-menu" style={{'min-width':'720px!important'}} >
                                <div className="datepicker">
                                    <div className="datepicker-header">
                                        <div className="datepicker-col-hour"></div>
                                        {date.map((day,index) => (
                                            <div className="d-flex">
                                                <div key={index} className="datepicker-date">{day}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {timesession.map((item,index) => (
                                        <Pickdaterow time={item.time} session={item.ss}/>
                                    ))}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="no-choose date-hour"></div>*/}
                                    {/*        <div className="no-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    {/*<div className="datepicker-timerow">*/}
                                    {/*    <div className="datepicker-col-hour">*/}
                                    {/*        <span className="pickhour">6時 - 9時</span>*/}
                                    {/*        <div className="picksession"><span>午前</span>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="d-flex">*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}
                                    {/*        <div className="hour-choose date-hour"></div>*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}


                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="divider"></div>
                    <div className="group-2">
                        <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                            <span className="publicsans-semi-bold-black-16px">場所</span>
                        </div>
                        <div className="dropdown item_dropdown">
                            <div style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                            <span>
                              <span className="publicsans-semi-bold-charade-14px">Ha Dong, Ha Noi +5km</span>
                            </span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="map-search dropdown-menu">
                                <div className="">
                                    <div className="switch">
                                        <Switch {...label} defaultChecked />
                                        <div>
                                            <span className="map-choose">online</span>
                                        </div>
                                    </div>
                                    <div className="map-instance">
                                        <div className="text-1 ">
                                            <span>グーグルマップ</span>
                                        </div>
                                        <div className="text-field">
                                            <div className="radius">
                                                <span>radius (km)</span>
                                            </div>
                                            <div className="input_radius">
                                                <input type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    <div style={{'gap':'30px','margin':'0 50px 0 20px'}}>
                        <Button  style={{'min-width':'814px','background-color':'#ffab00'}} size={"large"} fullWidth={830}  variant="contained" >
                            <div className="labelpublicsans-normal-white-16px d-flex align-items-center " style={{'gap':'8px'}}>
                                <i className="fa-solid fa-arrow-up-wide-short" style={{'margin-bottom':'3px'}}></i>
                                <span className="publicsans-normal-white-16px">料金：最低から</span>
                            </div>
                        </Button>
                    </div>
                    <div className="">
                        <Button style={{'min-width':'814px','background-color':'rgba(0, 171, 85, 1)'}} size={"large"} fullWidth={830} variant="contained" >
                            <div className="labelpublicsans-normal-white-16px d-flex align-items-center " style={{'gap':'8px'}}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span className="publicsans-normal-white-16px">料金：最低から</span>
                            </div>
                        </Button>
                    </div>
                </div>

                <div className="teacher d-flex mt-5 ">
                    <Teacher></Teacher>

                </div>
            </div>
        </div>
    )


}

export default Search;
