import React from 'react';
import './style.css';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';
import Contacts from '../../components/contacts';
const initialData = {
    avatar: '',
    info: {
        name: 'Pham Duc Huy',
        gender: 'male',
        address: '1 Dai Co Viet',
        latitude: 21.007174501197543, 
        longtitude: 105.84309276692177,
        speakingLanguage: 'Vietnamese',
        dob: '01/01/2001',
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
                level: 'N2',
                salary: '5000',
                minPerLesson: '45'
            },
        ]
    },
    contacts: {
        phone: '0123456789',
        gmail: '',
        resume: '',
        linkedIn: '',
        twitter: '',
        facebook: '',
        instagram: '',
    }
}

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='page-label'>
                教師になる！
            </div>
            <div className='left-side'>
                <Avatar savedAvatar={initialData.avatar} />
                <Contacts initialData={initialData.contacts}/>
            </div>
            <Form initialData={initialData.info} />
        </div>
    );
};

export default Profile;
