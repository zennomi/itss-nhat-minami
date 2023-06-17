import React from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react';
import CvImg from './cv.png'
import './style.css'
export default function Contacts({ initialData }) {
    const { handleSubmit, register } = useForm({
        defaultValues: initialData,
    })

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className='contacts-container' onSubmit={handleSubmit(onSubmit)}>
            <div className='title'>
                連絡先
            </div>
            <div className='contact-field'>
                <i className="fa-solid fa-phone" style={{ color: '#F0AB00', width: '24px', height: '24px' }}></i>
                <input
                    id='phone'
                    type='text'
                    className='contact-input'
                    {...register('phone')}
                    placeholder='電話番号'
                ></input>
            </div>
            <div className='contact-field'>
                <Icon icon="logos:google-gmail" className='icon' />
                <input
                    id='gmail'
                    type='text'
                    className='contact-input'
                    {...register('gmail')}
                    placeholder='Gmail'
                ></input>
            </div>
            <div className='contact-field'>
                <img src={CvImg} alt='' className='icon'></img>
                <input
                    id='resume'
                    type='text'
                    className='contact-input'
                    {...register('resume')}
                    placeholder='Resume'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-linkedin-in" style={{ color: '#007EBB', width: '24px', height: '24px' }}></i>
                <input
                    id='linkedIn'
                    type='text'
                    className='contact-input'
                    {...register('linkedIn')}
                    placeholder='LinkedIn'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-twitter" style={{ color: '#00AAEC', width: '24px', height: '24px' }}></i>
                <input
                    id='twitter'
                    type='text'
                    className='contact-input'
                    {...register('twitter')}
                    placeholder='Twitter'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-facebook-f" style={{ color: '#1465f0', width: '24px', height: '24px' }}></i>
                <input
                    id='facebook'
                    type='text'
                    className='contact-input'
                    {...register('facebook')}
                    placeholder='Facebook'
                ></input>
            </div>
            <div className='contact-field'>
                <Icon icon="skill-icons:instagram" className='icon' />
                <input
                    id='instagram'
                    type='text'
                    className='contact-input'
                    {...register('instagram')}
                    placeholder='Instagram'
                ></input>
            </div>
            <div className='button-row'>
                <button type='submit' className='contacts-submit' >
                    提出
                </button>
            </div>
        </form>
    )
}
