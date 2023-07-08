import React, { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from "../../components/header";
import BookmarkCard from "../../components/bookmark-card";
import './style.css'
import { getBookmark } from '../../services/teacherService';


const Bookmark = () => {
    const id = useMemo(() => localStorage.getItem('id'), []);

    const parseData = (data) => {
        return data.map((item) => ({
            id: item.teacher_id,
            name: item.name,
            lang_teach: item.lang_teach,
            photo_url: item?.photo_url.startsWith("http") ? item?.photo_url : `http://tungsnk.tech:9999${item?.photo_url}`,
        }));
    }

    const { data } = useQuery({
        queryKey: ['bookmark', id],
        queryFn: () => getBookmark(id),
        staleTime: 10 * 1000,
        select: (data) => parseData(data.data),
        enabled: !!id,
      });

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
                    {data?.map((item,index) => (
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
