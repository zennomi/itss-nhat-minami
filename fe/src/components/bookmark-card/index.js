import React, { useState, useEffect } from 'react';
import { Button} from "@mui/material";
import './style.css'

const BookmarkCard = ({data}) => {
    return(
        <div>
            <div className=" bookmark-cpn">
                <div>
                    <img src="https://c1thule-bd.edu.vn/wp-content/uploads/2022/04/Avatar-Tiktok-Dep-Cute-Doc-Dao-Tao-An-Tuong-Manh.jpg" className="bookmark-item-avater" alt=""/>
                </div>
                <div className="bookmark-detail">
                    <div className="bookmark-infor">
                        <div className="detail-name ">
                            <span>{data.name}</span>
                        </div>
                        <div className="detail-subj">
                            <span>{data.lang_teach}</span>
                        </div>
                    </div>
                    <div className="btn-delete">
                        <Button variant="outlined" size="medium">除く</Button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default BookmarkCard
