import React, { useState, useEffect } from 'react';
import { Rating, Switch, Button, Slider, Pagination } from "@mui/material";
import Teacher from "../../components/teacher";
import TeacherCard from "../../components/card-teacher";
import { LinearProgress } from "@mui/material";
import Header from "../../components/header";
import useListTeacher from './useListTeacher';
import Map from '../../components/map';
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

    const [hoverData, setHoverData] = useState('');

    const [filters, setFilters] = useState(null);
    const [sortedList, setSortedList] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [value, setValue] = React.useState([20, 70]);
    const [sort, setSort] = useState(true);
    const [lat, setLat] = useState(21);
    const [lon, setLon] = useState(105);
    const [address, setAddress] = useState('');
    const [radius, setRadius] = useState();

    const handleFilter = (key, value) => {
        setFilters({ ...filters, [key]: value });
    };
    const handleChange = (event, newValue) => {
        handleFilter('age', newValue);
        setValue(newValue);
    };

    const reverseGeocode = async (lat, lon) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
            const data = await response.json();

            if (response.ok && data.address) {
                const { house_number, road, city, country } = data.address;
                const addressComponents = [house_number, road, city, country].filter(Boolean);
                const address = addressComponents.join(', ');
                return address;
            } else {
                throw new Error('Reverse geocoding failed');
            }
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLat(latitude);
                    setLon(longitude);
                    reverseGeocode(latitude, longitude)
                        .then((clickedAddress) => {
                            setAddress(clickedAddress);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                },
                (error) => {
                    console.error('Geolocation error:', error);
                }
            );
        }
    }, []);

    const handleMapClick = (event) => {
        const { lat, lng } = event.latlng;
        setLat(lat);
        setLon(lng);
        handleFilter('latitude', lat);
        handleFilter('longitude', lng);
        reverseGeocode(lat, lng)
            .then((clickedAddress) => {
                setAddress(clickedAddress);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleRadiusChange = (event) => {
        setRadius(event.target.value);
        handleFilter('radius', event.target.value);
    };

    const handleSort = (sort) => {
        if (sort) {
            const sorted = [...listTeachers]?.sort((a, b) => b.price - a.price);
            setSortedList(sorted)
        } else {
            const sorted = [...listTeachers]?.sort((a, b) => a.price - b.price);
            setSortedList(sorted)
        }
        setIsSorted(true);
        setSort(!sort)
    }

    const handleSchedule = (event, hour, day) => {
        const timesession = filters?.timesession || [];
        const value = `${day}-${hour}`;
        if (timesession.includes(value)) {
            const index = timesession.indexOf(value);
            timesession.splice(index, 1);
        } else {
            timesession.push(value);
        }
        handleFilter('timesession', timesession);
        event.target.classList.toggle('hour-choose');
    };
    const handleMouseOver = (id, data) => {
        setHoverData(data)
        document.querySelector('.teachercard').classList.add('display');
    };

    const handleMouseLeave = (id) => {
        document.querySelector('.teachercard').classList.remove('display');
    }

    const handleSubmit = () => {
        const params = {
            ...queryString,
            ...filters
        };
        setQueryString(params);
        setIsSorted(false)
    };

    useEffect(() => {
        setFilters({ ...queryString });
    }, []);

    useEffect(() => {
        if (filters?.timesession && filters?.timesession.length > 0) {
            const timesession = filters?.timesession;
            timesession.forEach((time) => {
                const element = document.querySelector(`.${time}`);
                element.classList.add('hour-choose');
            });
        }
    }, [filters?.timesession]);

    return (
        <div>
            <Header />
            <div style={{ margin: '88px 96px' }}>
                <div className="row " style={{ padding: '20px 10px', 'min-width': '1714px', 'margin': '0' }}>
                    <div className="col col-sm-1_8 col-md-1_8 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語を習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
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

                    <div className="col col-sm-1_8 col-md-1_8 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">何語で習いたいか？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.lang_teach}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {languages.map((language, index) => (
                                        <label onClick={() => handleFilter("lang_teach", language)} key={index} className="choose dropdown-item">
                                            <span>{language}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-1_8 col-md-1_8 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">目的？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.purpose}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div className="dropdown-menu">
                                    {purposes.map((purpose, index) => (
                                        <label onClick={() => handleFilter("purpose", purpose)} key={index} className="choose dropdown-item">
                                            {/* <input style={{height:'20px','width':'20px','margin':'0 8px 0 0'}} type="checkbox"/> */}
                                            <span>{purpose}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col col-sm-3 col-md-3 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px" >料金？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
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
                                                    <span className="publicsans-normal-charade-14px">0</span>
                                                </div>
                                            </div>
                                            <div className="minmax-item">
                                                <div className="text-2publicsans-semi-bold-manatee-14px">
                                                    <span className="publicsans-semi-bold-manatee-14px">Max (¥)</span>
                                                </div>
                                                <div className="x">
                                                    <span className="publicsans-normal-charade-14px">10000</span>
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
                                        <div className="navbarpublicsans-normal-manatee-12px d-flex justify-content-between pt-2 m-3">
                                            {prices.map((price, index) => (
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

                    <div className="col col-sm-1_8 col-md-1_8 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">性別？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span>{filters?.sex}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div>
                                    <div className="dropdown-menu">
                                        <div >
                                            {sex.map((item, index) => (
                                                <li onClick={() => handleFilter('sex', item)}><span className="dropdown-item" >{item}</span></li>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col col-sm-1_8 col-md-1_8 item " >
                        <div className="item_header">
                            <div className="i-want-to-learnpublicsans-semi-bold-black-16px">
                                <span className="publicsans-semi-bold-black-16px">年齢？</span>
                            </div>
                            <div className="dropdown item_dropdown">
                                <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                    data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                    <span>{filters ? value[0] + '-' + value[1] : ''}</span>
                                    <span className="dropdown-toggle"  ></span>
                                </div>
                                <div>
                                    <div className="age dropdown-menu">
                                        <div className="d-flex flex-column">
                                            <div className="age-choose mb-3">
                                                <span className="publicsans-semi-bold-black-16px">年齢</span>
                                            </div>
                                            <div className="age-choose">
                                                <Slider
                                                    aria-label="Always visible"
                                                    value={value}
                                                    // onChange={(e, value) => handleFilter('age', value)}
                                                    onChange={handleChange}
                                                    valueLabelDisplay="auto"
                                                    step={10}
                                                />
                                            </div>
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
                            <div style={{ color: '#212B36', 'cursor': 'pointer' }} className="d-flex justify-content-between"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{filters?.star}星から </span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="star-filter dropdown-menu ">
                                {stars.map((star, index) => (
                                    <div onClick={() => handleFilter('star', star)} className="small-ratings d-flex " style={{ cursor: 'pointer' }} >
                                        <div className="dropdown-item_1  ">
                                            <Rating
                                                name="text-feedback"
                                                value={star}
                                                readOnly
                                                precision={0.5}
                                            />
                                        </div>
                                        {star < 5 &&
                                            <div>
                                                <span style={{
                                                    'color': 'rgb(33, 43, 54)'
                                                }}>から</span>
                                            </div>
                                        }
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
                        <div style={{ 'cursor': 'pointer' }} className="dropdown item_dropdown">
                            <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <span >日: 夜; 月: 午後; 火: 午後遅く;水: 夕方..."</span>
                                <span className="dropdown-toggle"  ></span>
                            </div>
                            <div className="frame-43 dropdown-menu" style={{ 'min-width': '720px!important' }} >
                                <div className="datepicker">
                                    <div className="datepicker-header">
                                        <div className="datepicker-col-hour"></div>
                                        {date.map((day, index) => (
                                            <div className="d-flex">
                                                <div key={index} className="datepicker-date">{day}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {timesession.map((item, index) => (
                                        <div className="datepicker-timerow">
                                            <div className="datepicker-col-hour">
                                                <span className="pickhour">{item.time}時</span>
                                                <div className="picksession">
                                                    <span>{item.ss}</span>
                                                </div>
                                            </div>
                                            {date.map((day, index) => (
                                                <div className="d-flex">
                                                    <div key={index} onClick={(e) => handleSchedule(e, item.time, day)} className={`date-hour ${day}-${item.time}`}></div>
                                                </div>
                                            ))}
                                        </div>
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
                            <div style={{ color: '#212B36' }} className="d-flex justify-content-between"
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <span>
                                    <span className="publicsans-semi-bold-charade-14px">{address} + {radius}km</span>
                                </span>
                                <span className="dropdown-toggle"></span>
                            </div>
                            <div className="map-search dropdown-menu">
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
                                            <input type="text" onChange={handleRadiusChange} />
                                        </div>
                                    </div>
                                </div>
                                {(lat && lon) &&
                                    <div style={{ height: '350px', width: '100%' }}>
                                        <Map
                                            latitude={lat}
                                            longitude={lon}
                                            handleMapClick={handleMapClick}
                                            clickable={true}
                                        />
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    <div style={{ 'gap': '30px', 'margin': '0 50px 0 20px' }}>
                        <Button onClick={() => handleSort(sort)} style={{ 'min-width': '814px', 'background-color': '#ffab00' }} size={"large"} fullWidth={830} variant="contained" >
                            <div className="labelpublicsans-normal-white-16px d-flex align-items-center " style={{ 'gap': '8px' }}>
                                {sort ? (
                                    <>
                                        <i className="fa-solid fa-arrow-up-wide-short" style={{ 'margin-bottom': '3px' }}></i>
                                        <span className="publicsans-normal-white-16px">料金：最低から</span>
                                    </>
                                ) : (
                                    <>
                                        <i className="fa-solid fa-arrow-down-wide-short" style={{ 'margin-bottom': '3px' }}></i>
                                        <span className="publicsans-normal-white-16px">料金：最高から</span>
                                    </>
                                )
                                }
                            </div>

                        </Button>
                    </div>
                    <div className="">
                        <Button onClick={handleSubmit} style={{ 'min-width': '814px', 'background-color': 'rgba(0, 171, 85, 1)' }} size={"large"} fullWidth={830} variant="contained" >
                            <div className="labelpublicsans-normal-white-16px d-flex align-items-center " style={{ 'gap': '8px' }}>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span className="publicsans-normal-white-16px">検索する</span>
                            </div>
                        </Button>
                    </div>
                </div>
                {isLoading && <>
                    <LinearProgress className='mt-4' />
                </>}
                <div className="d-flex mt-5">
                    <div>
                        {isSuccess && !isSorted && listTeachers?.map((item) => <>
                            <div className=" mt-5  ">
                                <div className="d-flex position-relative" onMouseOver={() => handleMouseOver(item.id, item)} onMouseLeave={() => handleMouseLeave(item.id)}>
                                    <Teacher data={item} />
                                </div>
                            </div>
                        </>)}
                        {isSuccess && isSorted && sortedList?.map((item) => <>
                            <div className="teacher d-flex flex-column mt-5 ">
                                <div onMouseOver={() => handleMouseOver(item.id, item)} onMouseLeave={() => handleMouseLeave(item.id)}>
                                    <Teacher data={item} />
                                </div>
                            </div>
                        </>)}

                    </div>
                    <div className="mx-3 teachercard" style={{ 'display': 'none' }}>
                        <TeacherCard data={hoverData} />
                    </div>


                </div>

                <div className="mt-5">
                    <Pagination count={totalPage} page={page} color="primary" onChange={handlePageChange} style={{
                        justifyContent: 'center',
                        display: 'flex',
                    }} />
                </div>
            </div>
        </div>
    )


}

export default Search;
