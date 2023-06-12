import React from 'react'
import { useState, useEffect } from 'react';
import LanguageCard from '../languageInfo';
import './style.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
    languages: yup.array().of(
        yup.object().shape({
            language: yup.string().required('言語を選択してください。'),
            level: yup.string().required('レベルを入力してください。'),
            salary: yup.number().required('給料を入力してください。'),
            minPerLesson: yup.number().required('レッソンの時間を入力してください。'),
        }),
    ),
});

const initialData = {
    name: 'Do Minh Hieu',
    gender: 'male',
    address: 'Thanh Xuan',
    speakingLanguage: 'Vietnamese',
    dob: '03/08/2001',
    country: 'Viet Nam',
    description: '',
    languages: [
        {
            language: 'English',
            level: 'B1',
            salary: '5000',
            minPerLesson: '45'
        },
        {
            language: 'Japanese',
            level: 'N3',
            salary: '5000',
            minPerLesson: '45'
        },
    ]
}
export default function Form() {
    const [languages, setLanguages] = useState(initialData.languages);
    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        defaultValues: initialData,
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        setLanguages(languages);
        setValue('languages', languages);
        console.log(data);
    };

    const handleAddButtonClick = () => {
        const newLanguage = {
            language: '',
            level: '',
            salary: '',
            minPerLesson: '',
        }
        setLanguages([...languages, newLanguage])
    };

    const handleChange = (index, field, value) => {
        setLanguages((prevLanguages) => {
            const updatedLanguages = [...prevLanguages];
            updatedLanguages[index] = {
                ...updatedLanguages[index],
                [field]: value
            };
            return updatedLanguages;
        });
    }

    const removeLanguage = (index) => {
        const updatedLanguages = [...languages];
        updatedLanguages.splice(index, 1);
        setLanguages(updatedLanguages)
    };

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
                        name='gender'
                    >
                        <option value='' disabled selected>性別</option>
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                        <option value="other">他</option>
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
                        name='spealingLanguage'
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
                {languages.map((language, index) => (
                    <div >
                        <LanguageCard
                            key={index}
                            index={index}
                            data={language}
                            onChange={handleChange}
                            errors={errors}
                        />
                        <div className='card-button-row'>
                            <button type="button" onClick={() => removeLanguage(index)}>削除</button>
                        </div>
                    </div>
                ))}


                <div className='button-row'>
                    <button type="button" className='button' onClick={handleAddButtonClick}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        言語
                    </button>
                    <button type="submit" className='button'>
                        保存
                    </button>
                </div>
            </div>
        </form>
    )
}