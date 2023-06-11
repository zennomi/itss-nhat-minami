import React from 'react'
import { useState, useEffect } from 'react';
import LanguageCard from '../languageInfo';
import './style.css'
export default function Form() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [speakingLanguage, setSpeakingLanguage] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleSpeakingLanguageChange = (event) => {
        setSpeakingLanguage(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleDobChange = (event) => {
        const { value } = event.target;
        setDob(formatDate(value));
    };

    const formatDate = (value) => {
        let formattedValue = value.replace(/\D/g, ''); // Remove non-numeric characters
        if (formattedValue.length <= 2) {
            formattedValue = formattedValue.replace(/^(\d{0,2})/, '$1');
        } else if (formattedValue.length <= 4) {
            formattedValue = formattedValue.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
        } else {
            formattedValue = formattedValue.replace(/^(\d{0,2})(\d{0,2})(\d{0,4}).*/, '$1/$2/$3');
        }
        return formattedValue;
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

    const handleSubmit = () =>{

    };
    return (
        <form className="form-container" onClick={handleSubmit}>
            <div className="form-row">
                <input
                    id='name'
                    type="text"
                    className="form-field"
                    value={name}
                    onChange={handleNameChange}
                    placeholder='氏名' />
                <select id='gender' className="form-field"
                    value={gender} onChange={handleGenderChange}>
                    <option value='' disabled selected>性別</option>
                    <option value="Male">男</option>
                    <option value="Female">女</option>
                    <option value="Other">他</option>
                </select>
            </div>
            <div className="form-row">
                <input
                    id='address'
                    type='text'
                    className='form-field'
                    value={address}
                    onChange={handleAddressChange}
                    placeholder='場所' />
                <select id='speaking language' className="form-field"
                    value={speakingLanguage} onChange={handleSpeakingLanguageChange}>
                    <option value='' disabled selected>何語で教えますか。</option>
                    <option value="Endlish">英語</option>
                    <option value="Vietnamese">ベトナム語</option>
                    <option value="Japanese">日本語</option>
                </select>
            </div>
            <div className="form-row">
                <input
                    id="dateOfBirth"
                    type="text"
                    className='form-field'
                    pattern="\d{2}/\d{2}/\d{4}"
                    maxLength="10"
                    value={dob}
                    onChange={handleDobChange}
                    placeholder="生年月日"
                />
                <input
                    id='country'
                    type="text"
                    className="form-field"
                    value={country}
                    onChange={handleCountryChange}
                    placeholder='国籍'
                />
            </div>
            <div className='textarea'>
                <input
                    id='description'
                    type='text'
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder='自己紹介'
                />
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