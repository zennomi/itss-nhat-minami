import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
    language: yup.string().required('言語を選択してください。'),
    level: yup.string().required('レベルを入力してください。'),
    salary: yup.number().required('給料を入力してください。'),
    minPerLesson: yup.number().required('レッソンの時間を入力してください。'),
});
const LanguageCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <div className='frame-2-item'>
            <div className='form-row'>
                <div className='form-field'>
                    <select
                        id='language'
                        className="input-field"
                        {...register('language')} // Đăng ký trường language
                    >
                        <option value='' disabled>言語</option>
                        <option value="Endlish">英語</option>
                        <option value="Vietnamese">ベトナム語</option>
                        <option value="Japanese">日本語</option>
                    </select>
                    {errors.language && <p className='error-message'>{errors.language.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        id='level'
                        type='text'
                        className='input-field'
                        {...register('level')} // Đăng ký trường level
                        placeholder='レベル'
                    />
                    {errors.level && <p className='error-message'>{errors.level.message}</p>}
                </div>
            </div>
            <div className='form-row'>
                <div className='form-field'>
                    <input
                        id='salary'
                        type='text'
                        className='input-field'
                        {...register('salary')} // Đăng ký trường salary
                        placeholder='料金 ¥'
                    />
                    {errors.salary && <p className='error-message'>{errors.salary.message}</p>}
                </div>
                <div className='form-field'>
                    <input
                        id='min per lesson'
                        type='text'
                        className='input-field'
                        {...register('minPerLesson')} // Đăng ký trường minPerLesson
                        placeholder='レッソンの時間 （分）'
                    />
                    {errors.minPerLesson && <p className='error-message'>{errors.minPerLesson.message}</p>}
                </div>
            </div>
        </div>
    )
}
export default LanguageCard;