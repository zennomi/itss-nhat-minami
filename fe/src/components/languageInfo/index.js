import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'
const LanguageCard = ({initialData}) => {
    /**Cannot change input value */
    const [formData, setFormData] = useState(initialData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    return (
        <div className='frame-2-item'>
            <div className='form-row'>
                <select id='language' className="form-field"
                    value={formData.language} onChange={handleInputChange}>
                    <option value='' disabled selected>言語</option>
                    <option value="English">英語</option>
                    <option value="Vietnamese">ベトナム語</option>
                    <option value="Japanese">日本語</option>
                </select>
                <input
                    id='level'
                    type='text'
                    className='form-field'
                    value={formData.level}
                    onChange={handleInputChange}
                    placeholder='レベル'
                />
            </div>
            <div className='form-row'>
                <input
                    id='salary'
                    type='text'
                    className='form-field'
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder='料金 (¥)'
                />
                <input
                    id='min per lesson'
                    type='text'
                    className='form-field'
                    value={formData.minPerLesson}
                    onChange={handleInputChange}
                    placeholder='レッソンの時間 (分)'
                />
            </div>
        </div>
    )
}
export default LanguageCard;