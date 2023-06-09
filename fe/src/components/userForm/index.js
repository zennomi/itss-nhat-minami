import React from 'react'
import { useState, useEffect } from 'react';
import './style.css'
export default function Form() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        const { value } = event.target;
        setInputValue(formatDate(value));
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
    const languageDiv = <div className='frame-2-item'>
        <div className='form-row'>
            <select id='language' className="form-field" >
                <option disabled selected>言語</option>
                <option value="Endlish">英語</option>
                <option value="Vietnamese">ベトナム語</option>
                <option value="Japanese">日本語</option>
            </select>
            <select id='level' className="form-field" >
                <option disabled selected>レベル</option>
                <option value="primary">初級</option>
                <option value="senior">中級</option>
                <option value="junior">上級</option>
            </select>
        </div>
        <div className='form-row'>
            <input
                id='salary'
                type='text'
                className='form-field'
                placeholder='料金'
            />
            <input
                id='min per lesson'
                type='text'
                className='form-field'
                placeholder='レッソンの時間'
            />
        </div>
    </div>
    const [languages, setLanguages] = useState([]);
    const handleButtonClick = () => {
        const newLanguage = languageDiv
        setLanguages([...languages, newLanguage]);
    };

    /**Thử hiển thị thôi ạ */
    useEffect(() => {
        setLanguages([...languages, languageDiv]);
    }, []);
    /** */
    return (
        <div className="form-container">
            <div className="form-row">
                <input
                    id='name'
                    type="text"
                    className="form-field"
                    placeholder='氏名' />
                <select id='gender' className="form-field" placeholder='Gender'>
                    <option disabled selected>性別</option>
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
                    placeholder='場所' />
                <select id='teaching language' className="form-field" >
                    <option disabled selected>何語で教えますか。</option>
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
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="生年月日"
                />
                <input
                    id='country'
                    type="text"
                    className="form-field"
                    placeholder='国籍'
                />
            </div>
            <div className='textarea'>
                <input
                    id='description'
                    type='text'
                    placeholder='自己紹介'
                />
            </div>
            <div className='frame-2'>
                <label>言語</label>
                <div>{languages.map((div) => div)}</div>

                <button className='button' onClick={handleButtonClick}>
                    <i class="fa fa-plus" aria-hidden="true"></i>
                    <label>言語</label>
                </button>
            </div>
        </div>
    )
}