import React from 'react';
import './style.css';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';
import Contacts from '../../components/contacts';
const initialData = {
    avatar: '',
    info: {
        name: 'Do Minh Hieu',
        gender: 'male',
        address: '175/5 Dinh Cong',
        latitude: 21.007174501197543, 
        longtitude: 105.84309276692177,
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
    },
    contacts: {
        phone: '0394896395',
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
