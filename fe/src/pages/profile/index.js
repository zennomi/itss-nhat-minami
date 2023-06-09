import React from 'react';
import './style.css';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { useState, useEffect, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Form from '../../components/userForm';
import Avatar from '../../components/avatar';
const Profile = () => {
    return (
        <div className='container'>
            <div className='page-label'>
                教師になる！
            </div>
            <Avatar />
            <Form />
        </div>
    );
};

export default Profile;
