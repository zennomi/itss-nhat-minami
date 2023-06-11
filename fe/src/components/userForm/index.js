import React from 'react'
import { useState, useEffect } from 'react';
import LanguageCard from '../languageInfo';
import './style.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('氏名を入力してください'),
    gender: yup.string().required('性別を選択してください'),
    address: yup.string().required('場所を入力してください'),
    speakingLanguage: yup.string().required('教えるために使用する言語を選択してください'),
    dob: yup.string().matches(
        /^(\d{2})\/(\d{2})\/(\d{4})$/,
        '日付の形式が正しくありません。正しい形式は「dd/mm/yyyy」です。'
    )
        .test('is-number', '数字で入力してください。', (value) => {
            if (!value) return true;
            const numberValue = Number(value.replace(/\//g, ''));
            return !isNaN(numberValue);
        })
        .test('is-valid', '日付が無効です', (value) => {
            const [day, month, year] = value.split('/');
            const date = new Date(`${year}-${month}-${day}`);
            return date instanceof Date && !isNaN(date);
        }).required('生年月日を入力してください'),
    country: yup.string(),
    description: yup.string(),
});
export default function Form() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data)
    };

    const nullData = {
        language: '',
        level: '',
        salary: '',
        minPerLesson: '',
    }

    const [languages, setLanguages] = useState([]);
    const handleAddButtonClick = () => {
        const newLanguage = <LanguageCard initialData={nullData} />
        setLanguages([...languages, newLanguage]);
    };

    /**Thử hiển thị thôi ạ */
    const initialData = {
        language: 'English',
        level: 'A1',
        salary: '5000',
        minPerLesson: '50',
    }
    const languageDiv = <LanguageCard initialData={initialData} />
    useEffect(() => {
        setLanguages([...languages, languageDiv]);
    }, []);
    /** */

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id='name'
                        type="text"
                        className="input-field"
                        {...register('name')}
                        placeholder='氏名'
                    />
                    {errors.name && <p className="error-message">{errors.name.message}</p>}
                </div>
                <div className='form-field'>
                    <select
                        id='gender'
                        className="input-field"
                        {...register('gender')}
                    >
                        <option value='' disabled selected>性別</option>
                        <option value="Male">男</option>
                        <option value="Female">女</option>
                        <option value="Other">他</option>
                    </select>
                    {errors.gender && <p className="error-message">{errors.gender.message}</p>}
                </div>
            </div>
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id='address'
                        type='text'
                        className='input-field'
                        {...register('address')}
                        placeholder='場所'
                    />
                    {errors.address && <p className="error-message">{errors.address.message}</p>}
                </div>
                <div className='form-field'>
                    <select
                        id='speakingLanguage'
                        className="input-field"
                        {...register('speakingLanguage')}
                    >
                        <option value='' disabled selected>何語で教えますか。</option>
                        <option value="English">英語</option>
                        <option value="Vietnamese">ベトナム語</option>
                        <option value="Japanese">日本語</option>
                    </select>
                    {errors.speakingLanguage && <p className="error-message">{errors.speakingLanguage.message}</p>}

                </div>
            </div>
            <div className="form-row">
                <div className='form-field'>
                    <input
                        id="dob"
                        type="text"
                        className='input-field'
                        pattern="\d{2}/\d{2}/\d{4}"
                        maxLength="10"
                        {...register('dob')}
                        placeholder="生年月日"
                    />
                    {errors.dob && <p className="error-message">{errors.dob.message}</p>}
                </div>
                <div className="form-field">
                    <input
                        id='country'
                        type="text"
                        className='input-field'
                        {...register('country')}
                        placeholder='国籍'
                    />
                    {errors.country && <p className="error-message">{errors.country.message}</p>}
                </div>
            </div>
            <div className="form-row">
                <div className="form-field">
                    <textarea
                        id='description'
                        className='textarea'
                        {...register('description')}
                        placeholder='自己紹介'
                    />
                    {errors.description && <p className="error-message">{errors.description.message}</p>}
                </div>
            </div>
            <div className='frame-2'>
                <label>言語</label>
                <div>{languages.map((div) => div)}</div>
                <div className='button-row'>
                    <button className='button' onClick={handleAddButtonClick}>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                        <label>言語</label>
                    </button>
                    <button type="submit" className='button'>
                        <label>保存</label>
                    </button>
                </div>
            </div>
        </form>
    )
}