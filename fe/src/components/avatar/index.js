import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './style.css'
export default function Avatar({ initialData }) {
    const fileInputRef = useRef(null);
    const divRef = useRef(null);
    const buttonRef = useRef(null);
    const [avatar, setAvatar] = useState(initialData.avatar);
    const [isButtonVisible, setButtonVisible] = useState(false);
    const [showDiv, setShowDiv] = useState(false);

    const handleMouseMove = () => {
        setButtonVisible(true);
    };
    const handleMouseLeave = () => {
        setButtonVisible(false);
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (divRef.current && !divRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setShowDiv(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
    const handleAvatarChangeButton = () => {
        setShowDiv(true);
    };
    const handleAddFileClick = () => {
        fileInputRef.current.click();
    }
    const handleAvatarChange = (event) => {
        const uploadedAvatar = event.target.files[0];
        if (uploadedAvatar.size > 3.1 * 1024 * 1024) {
            alert('File size exceeds the limit of 3.1MB');
            return;
        }
        if (uploadedAvatar) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(uploadedAvatar);
            initialData.avatar = uploadedAvatar;
        }
    };
    return (
        <div className='left-side'>
            <div className='avatar-container'>
                {avatar ? (
                    <img src={avatar} alt='User Avatar' className='user-avatar' />
                ) : (
                    <div className='placeholder-avatar'></div>
                )}
                <div
                    className='round-button'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {isButtonVisible && <button className='transparent-layout' onClick={handleAvatarChangeButton}>
                        <div className='transparent-layout-center-content'>
                            <i class="fa fa-camera fa-lg" aria-hidden="true"></i>
                            Update photo
                        </div>
                    </button>}
                </ div>
            </div>
            {showDiv && (
                <div className='add-file-field' ref={divRef}>
                    <button className='add-file-button' onClick={handleAddFileClick}>
                        <input type='file' accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleAvatarChange} />
                        <i class="fa fa-cloud-upload" aria-hidden="true" style={{
                            width: '40px',
                            height: '40px',
                            color: '#919EAB'
                        }}></i>
                        <label>Upload file</label>
                    </button>
                    <div className='note'>
                        <span>Allowed *.jpeg, *.jpg, *.png, *.gif</span>
                        <span>Max size of 3.1 MB</span>
                    </div>
                </div>
            )
            }
        </div >
    );
}
