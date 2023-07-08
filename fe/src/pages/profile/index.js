import React from 'react';
import './style.css';
import Header from '../../components/header';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';
import Contacts from '../../components/contacts';
import useProfile from './useProfile';

const Profile = () => {
    const {
        teacher
    } = useProfile();
    return (
        <div className='profile-container'>
            <Header />
            <div className='page-label'>
                教師になる！
            </div>
            <div className='left-side'>
                <Avatar initialData={teacher} />
                <Contacts initialData={teacher} />
            </div>
            <Form initialData={teacher} />
        </div>
    );
};

export default Profile;
