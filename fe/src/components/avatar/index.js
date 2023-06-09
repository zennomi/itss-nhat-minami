import React from 'react'
import { useState, useRef } from 'react';
import './style.css'
export default function Avatar() {
    const fileInputRef = useRef(null);
    const [avatar, setAvatar] = useState(null);
    const [isButtonVisible, setButtonVisible] = useState(false);

    const handleMouseMove = () => {
        setButtonVisible(true);
    };

    const handleMouseLeave = () => {
        setButtonVisible(false);
    };
    const handleAvatarChangeButton = () => {
        fileInputRef.current.click();
    };
    const handleAvatarChange = (event) => {
        const uploadedAvatar = event.target.files[0];
        if (uploadedAvatar.size > 3.1*1024*1024) {
            alert('File size exceeds the limit of 3.1MB');
            return;
          }
        if (uploadedAvatar) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(uploadedAvatar);
        } else {
            setAvatar(null);
        }
    };
    return (
        <div
            className='avatar-container'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {avatar ? (
                <img src={avatar} alt='User Avatar' className='user-avatar'/>
            ) : (
                <div className='placeholder-avatar'></div>
            )}
            {isButtonVisible && <button className='transparent-layout' onClick={handleAvatarChangeButton}>
                <input type='file' accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleAvatarChange} />
                <div className='transparent-layout-center-content'>
                    <i class="fa fa-camera fa-lg" aria-hidden="true"></i>
                    <lable>Upload photo</lable>
                </div>
                <div className='transparent-layout-note'>
                    <span>Allowed *.jpeg, *.jpg, *.png, *.gif</span>
                    <span>Max size of 3.1 MB</span>
                </div>
            </button>}
        </ div>
    );
}
