import React, { useState } from 'react'
import './style.css'

const LanguageCard = ({
    index,
    data,
    onChange,
    errors,
}) => {
    return (
        <div className='frame-2-item'>
            <div className='form-row'>
                <div className='form-field'>
                    <select
                        id={`language[${index}]`}
                        className="input-field"
                        value={data.language}
                        onChange={(e) => onChange(index, 'language', e.target.value)}
                    >
                        <option value="" disabled selected>言語</option>
                        <option value="English">英語</option>
                        <option value="Vietnamese">ベトナム語</option>
                        <option value="Japanese">日本語</option>
                    </select>
                    {errors.laguage && <p className='error-message'>{errors.laguage.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        id={`language[${index}]`}
                        type='text'
                        className='input-field'
                        value={data.level}
                        onChange={(e) => onChange(index, 'level', e.target.value)}
                        placeholder='レベル'
                    />
                    {errors.level && <p className='error-message'>{errors.level.message}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-field'>
                    <input
                        id={`language[${index}]`}
                        type='text'
                        className='input-field'
                        value={data.salary}
                        onChange={(e) => onChange(index, 'salary', e.target.value)}
                        placeholder='料金 ¥'
                    />
                    {errors.salary && <p className='error-message'>{errors.salary.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        id={`language[${index}]`}
                        type='text'
                        className='input-field'
                        value={data.minPerLesson}
                        onChange={(e) => onChange(index, 'minPerLesson', e.target.value)}
                        placeholder='レッソンの時間 （分）'
                    />
                    {errors.minPerLesson && <p className='error-message'>{errors.minPerLesson.message}</p>}
                </div>
            </div>

        </div>
    )
}
export default LanguageCard;