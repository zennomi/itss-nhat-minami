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
                    id='phone_number'
                    type='text'
                    className='contact-input'
                    {...register('phone_number')}
                    placeholder='電話番号'
                ></input>
            </div>
            <div className='contact-field'>
                <Icon icon="logos:google-gmail" className='icon' />
                <input
                    id='gmail_url'
                    type='text'
                    className='contact-input'
                    {...register('gmail_url')}
                    placeholder='Gmail'
                ></input>
            </div>
            <div className='contact-field'>
                <img src={CvImg} alt='' className='icon'></img>
                <input
                    id='resume_url'
                    type='text'
                    className='contact-input'
                    {...register('resume_url')}
                    placeholder='Resume'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-linkedin-in" style={{ color: '#007EBB', width: '24px', height: '24px' }}></i>
                <input
                    id='linkedin_url'
                    type='text'
                    className='contact-input'
                    {...register('linkedin_url')}
                    placeholder='LinkedIn'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-twitter" style={{ color: '#00AAEC', width: '24px', height: '24px' }}></i>
                <input
                    id='twitter_url'
                    type='text'
                    className='contact-input'
                    {...register('twitter_url')}
                    placeholder='Twitter'
                ></input>
            </div>
            <div className='contact-field'>
                <i className="fa-brands fa-facebook-f" style={{ color: '#1465f0', width: '24px', height: '24px' }}></i>
                <input
                    id='fabebook_url'
                    type='text'
                    className='contact-input'
                    {...register('fabebook_url')}
                    placeholder='Facebook'
                ></input>
            </div>
            <div className='contact-field'>
                <Icon icon="skill-icons:instagram" className='icon' />
                <input
                    id='instagram_url'
                    type='text'
                    className='contact-input'
                    {...register('instagram_url')}
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
