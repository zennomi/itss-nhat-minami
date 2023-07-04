import React, { useState, useEffect } from 'react';
import { Button} from "@mui/material";
import './style.css'
import { removeBookmark } from '../../services/teacherService.js'
import { toast } from 'react-toastify';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const BookmarkCard = ({data}) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const user_id = localStorage.getItem('id');
    // const photo_url = data?.photo_url.startsWith("http") ? data?.photo_url : `http://tungsnk.tech:9999${data?.photo_url}`;
    const handleRemove = async () => {
        try {
            await removeBookmark({
                teacher_id: data.id,
                user_id: user_id
            })
            queryClient.invalidateQueries(['bookmark', user_id])
            toast.success('除く成功')
        } catch {
            toast.error('除く失敗')
        }
    }

    return(
        <div>
            <div className=" bookmark-cpn">
                <div>
                    <img src="https://c1thule-bd.edu.vn/wp-content/uploads/2022/04/Avatar-Tiktok-Dep-Cute-Doc-Dao-Tao-An-Tuong-Manh.jpg" className="bookmark-item-avater" alt="" />
                </div>
                <div className="bookmark-detail">
                    <div className="bookmark-infor" onClick={() => navigate(`/tutor/${data?.id}`)}>
                        <div className="detail-name ">
                            <span>{data.name}</span>
                        </div>
                        <div className="detail-subj">
                            <span>{data.lang_teach}</span>
                        </div>
                    </div>
                    <div className="btn-delete">
                        <Button variant="outlined" size="medium" onClick={handleRemove}>除く</Button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default BookmarkCard
