import React from 'react'
import { useState, useRef, useEffect } from 'react';
import './style.css'
export default function Avatar({ savedAvatar }) {
    const fileInputRef = useRef(null);
    const buttonRef = useRef(null);
    const [avatar, setAvatar] = useState(savedAvatar);
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
            const addFile = document.getElementById('add-file-field');
            if (event.target !== addFile && event.target.parentNode !== addFile) {
                setShowDiv(false);
            }
        };
        window.addEventListener('mouseup', handleOutsideClick);
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
            setShowDiv(false);
            //Send data to BE here
            console.log(avatar);
        }
    };

    return (
        <>
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
                    {isButtonVisible && <button className='transparent-layout' onClick={handleAvatarChangeButton} ref={buttonRef}>
                        <div className='transparent-layout-center-content'>
                            <i class="fa fa-camera fa-lg" aria-hidden="true"></i>
                            Update photo
                        </div>
                    </button>}
                </ div>
            </div>
            {showDiv && (
                <div className='add-file-field' id='add-file-field'>
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
        </>
    );
}
