import React, { useState, useEffect } from 'react';
import {LinearProgress , Button} from "@mui/material";
import Header from "../../components/header";
import BookmarkCard from "../../components/bookmark-card";
import './style.css'


const Bookmark = () => {
    const teachers = [
        {name: 'Phạm Đức Huy ',lang_teach:'Japanese , Korean'},
        {name: 'Phạm Duy Mạnh ',lang_teach:'HongKong , French'},
        {name: 'Nguyễn Thu Hà ',lang_teach:'Spain, Chinese'},
        {name: 'Nguyễn Thu Linh ',lang_teach:'Japanese, Chinese'},
    ]


    return (
        <div>
            <Header/>
            <div className="bookmark" >
                <div className="bookmark-header">
                    <div className="bookmark-header-left">
                        <div className=" ">
                            <span className=" text-front">ブックマークされた先生</span>
                        </div>
                        <div>
                            <span className="text-behind ">マイリストに保存させた教師</span>
                        </div>
                    </div>
                    <div className="bookmark-header-right">

                    </div>
                </div>


                <div className="row">
                    {teachers.map((item,index) => (
                        <div key={index} className="col-sm-4">
                            <BookmarkCard data={item}/>
                        </div>
                    ))}






                </div>
            </div>
        </div>
    )
}

export default Bookmark
