import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Icon } from '@iconify/react';
import CvImg from './cv.png'
import './style.css'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import { useQueryClient, useMutation } from '@tanstack/react-query';
import { updateTeacherInfo } from '../../services/teacherService';
import LoadingButton from '@mui/lab/LoadingButton';

const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Contacts({ initialData }) {
    const { id } = useParams();

    const queryClient = useQueryClient();

    const [open, setOpen] = React.useState(false);

    const updateTeacherInfoMutation = useMutation(data => updateTeacherInfo(data));

    const onSubmit = (data) => {
        updateTeacherInfoMutation.mutate(
            { teacher_id: id, ...data }, 
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({
                        queryKey: ['profile'],
                      });
                      setOpen(true);
                }
            }
        );
    }; 

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const { reset, handleSubmit, register } = useForm({
        defaultValues: initialData,
    })

    useEffect(() => {
        reset(initialData);
    }, [initialData, reset]);

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
                <Icon icon="logos:google-gmail" className='icon-box' />
                <input
                    id='gmail'
                    type='text'
                    className='contact-input'
                    {...register('gmail')}
                    placeholder='Gmail'
                ></input>
            </div>
            <div className='contact-field'>
                <img src={CvImg} alt='' className='icon-box'></img>
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
                    {...register('facebook_url')}
                    placeholder='Facebook'
                ></input>
            </div>
            <div className='contact-field'>
                <Icon icon="skill-icons:instagram" className='icon-box' />
                <input
                    id='instagram_url'
                    type='text'
                    className='contact-input'
                    {...register('instagram_url')}
                    placeholder='Instagram'
                ></input>
            </div>
            <div className='button-row'>
            <LoadingButton
                        loading={updateTeacherInfoMutation.isLoading} 
                        type="submit" 
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            background: "#00AB55",
                            border: "transparent",
                            borderRadius: "8px",
                            fontFamily: 'Public Sans',
                            fontStyle: "normal",
                            fontWeight: 600,
                            fontSize: "22px",
                            lineHeight: "28px",
                            color: "#FFFFFF",
                    }}>
                        保存
                    </LoadingButton>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Update successfully!
                    </Alert>
                </Snackbar>
            </div>
        </form>
    )
}
