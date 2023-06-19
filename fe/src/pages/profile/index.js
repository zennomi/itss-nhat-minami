import React from 'react';
import './style.css';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';
import Contacts from '../../components/contacts';
const initialData = {
    photo_url: '',
    background_image_url: '',
    name: 'Pham Duc Huy',
    gender: '男性',
    address: '1 Dai Co Viet',
    latitude: 21.007174501197543,
    longtitude: 105.84309276692177,
    lang_teach: 'ベトナム語',
    date_of_birth: '01/01/2001',
    country_of_birth: 'Viet Nam',
    description: '',
    languages: [
        {
            lang_study: '英語',
            level: 'B1',
            salary: '5000',
            minPerLesson: '45'
        },
        {
            lang_study: '日本語',
            level: 'N2',
            salary: '5000',
            minPerLesson: '45'
        },
    ],
    phone_number: '0123456789',
    gmail_url: '',
    resume_url: '',
    linkedin_url: '',
    twitter_url: '',
    facebook_url: '',
    instagram_url: '',
}

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='page-label'>
                教師になる！
            </div>
            <div className='left-side'>
                <Avatar initialData={initialData} />
                <Contacts initialData={initialData} />
            </div>
            <Form initialData={initialData} />
        </div>
    );
};

export default Profile;
