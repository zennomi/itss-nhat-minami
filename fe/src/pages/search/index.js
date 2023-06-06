import React, { useState, useEffect } from 'react';
import { Rating, Switch, Button, Slider,Pagination } from "@mui/material";
import Pickdaterow from "../../components/pickdaterow";
import Teacher from "../../components/teacher";
import {
    LinearProgress
} from '@mui/material';
import useListTeacher from './useListTeacher';
import {
    languages,
    purposes,
    prices,
    sex, 
    stars,
    date,
    timesession
} from "../../utils/constant";
import './style.css';

const Search = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const {
        listTeachers,
        isSuccess,
        isLoading,
        page,
        totalPage,
        handlePageChange,
        queryString,
        setQueryString,
    } = useListTeacher();

    const [filters, setFilters] = useState(null);

    const handleFilter = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };

    const handleSubmit = () => {
        const params = {
            ...queryString,
            ...filters
        };
        setQueryString(params);
    };

    useEffect(() => {
        setFilters({ ...queryString });
    }, []);

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
                                   <span>{filters?.lang_study}</span>
                                   <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {languages.map((language, index) => (
                                        <li onClick={() => handleFilter('lang_study', language)}><span key={index} className="dropdown-item" >{language}</span></li>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-2_4 col-md-2_4 item " style={{padding:'0 10px'}}>
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語で習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.lang_teach}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {languages.map((language,index) => (
                                        <label onClick={() => handleFilter("lang_teach", language)} key={index} className="choose dropdown-item">
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
                                    <span>{filters?.purpose}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {purposes.map((purpose,index) => (
                                        <label onClick={() => handleFilter("purpose", purpose)} key={index} className="choose dropdown-item">
                                            {/* <input style={{height:'20px','width':'20px','margin':'0 8px 0 0'}} type="checkbox"/> */}
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
                                <span className="publicsans-semi-bold-black-16px">価値？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.price}</span>
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
                                                valueLabelDisplay="auto"
                                                step={10}
                                                onChange={(e, value) => handleFilter('price', value)}
                                                marks
                                                min={0}
                                                max={10000}
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
                                <span className="publicsans-semi-bold-black-16px">性別と年齢？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div  style={{color:'#212B36'}} className="d-flex justify-content-between"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.age}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div>
                                    <div className="dropdown-menu">
                                        <div >
                                                {sex.map((item,index) => (
                                                    <li onClick={() => handleFilter('age', item)}><span className="dropdown-item" >{item}</span></li>
                                                ))}
                                        </div>
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
                                <span>{filters?.star} Star</span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="dropdown-menu ">
                                {stars.map((star,index) => (
                                    <div onClick={() => handleFilter('star', star)} className="small-ratings d-flex " style={{cursor:'pointer'}} >
                                        <div className="dropdown-item_1  ">
                                            <Rating
                                                name="text-feedback"
                                                value={star}
                                                readOnly
                                                precision={0.5}
                                            />
                                        </div>
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
                              <span className="publicsans-semi-bold-charade-14px">Ha Noi, Ha Noi +5km</span>
                            </span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="map-search dropdown-menu">
                                <div className="">
                                    <div className="switch">
                                        <Switch {... label } defaultChecked />
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
                        <Button onClick={handleSubmit} style={{'min-width':'814px','background-color':'rgba(0, 171, 85, 1)'}} size={"large"} fullWidth={830} variant="contained" >
                            <div className="labelpublicsans-normal-white-16px d-flex align-items-center " style={{'gap':'8px'}}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span className="publicsans-normal-white-16px">料金：最低から</span>
                            </div>
                        </Button>
                    </div>
                </div>

                { isLoading && <>
                    <LinearProgress className='mt-4'/>
                </> }

                {isSuccess && listTeachers?.map((item) => <>
                    <div className="teacher d-flex mt-5 ">
                        <Teacher data={item} />
                    </div>
                </>) }
                <div className="mt-5">
                    <Pagination count={totalPage} page={page} color="primary" onChange={handlePageChange} style={{
                        justifyContent: 'center',
                        display: 'flex',
                    }}/>
                </div>
            </div>
        </div>
    )


}

export default Search;
