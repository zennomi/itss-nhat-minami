import React from 'react';
import './style.css';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useState, useEffect, useRef } from 'react';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';

const initialData = {
    avatar: '',
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

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='page-label'>
                教師になる！
            </div>
            <Avatar initialData={initialData}/>
            <Form initialData={initialData}/>
        </div>
    );
};

export default Profile;
