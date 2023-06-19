import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTeacher } from '../../services/teacherService';
import { flagLanguageImg } from '../../utils/constant';

export default function useListTeacher() {
  const { id } = useParams();

  const initialData = {
    photo_url: '',
    background_image_url: '',
    name: 'Pham Duc Huy',
    gender: '男性',
    address: '1 Dai Co Viet',
    latitude: 21.007174501197543,
    longitude: 105.84309276692177,
    lang_teach: 'ベトナム語',
    date_of_birth: '01/01/2001',
    country_of_birth: 'Viet Nam',
    description: '',
    languages: [
        {
            lang_study: '英語',
            level: 'B1',
            salary: '5000',
            minPerLesson: '45'
        },
        {
            lang_study: '日本語',
            level: 'N2',
            salary: '5000',
            minPerLesson: '45'
        },
    ],
    phone_number: '0123456789',
    gmail: '',
    resume_url: '',
    linkedin_url: '',
    twitter_url: '',
    facebook_url: '',
    instagram_url: '',
}

  const parseData = useCallback((data) => {
    const profile = {
      photo_url: data?.photo_url,
      background_image_url: data?.background_image_url,
      name: data?.name,
      gender: data?.gender,
      address: data?.country_of_birth,
      latitude: data?.latitude,
      longitude: data?.longitude,
      lang_teach: data?.lang_teach,
      date_of_birth: data?.date_of_birth,
      country_of_birth: data?.country_of_birth,
      description: data?.description,
      languages: [
          {
              lang_study: '英語',
              level: 'B1',
              salary: '5000',
              minPerLesson: '45'
          },
          {
              lang_study: '日本語',
              level: 'N2',
              salary: '5000',
              minPerLesson: '45'
          },
      ],
      phone_number: '0123456789',
      gmail: '',
      resume_url: '',
      linkedin_url: '',
      twitter_url: '',
      facebook_url: '',
      instagram_url: '',
    }

    const userProfileBannerData = {
        bg: data?.background_image_url,
        img_Avatar25: data?.photo_url,
        spanText1: data?.name,
        spanText2: data?.lang_teach
    };
    
    const userProfileAboutCardData = {
        address: data?.country_of_birth,
        gender: data?.gender,
        lang_native: data?.lang_teach,
        level: data?.language_code + ": " + data?.level,
      };
  
    const teacherInformation = {
        lang_native: data?.lang_teach,
        flag: flagLanguageImg[data?.lang_teach],
        star: data?.star.toFixed(1),
        rated_count: data?.reviewCount,
        price: data?.price,
        time: data?.hours,
        phone: data?.phone_number,
        resume_url: data?.resume_url,
        gmail: data?.website_url,
        website_url: data?.website_url,
        facebook_url: data?.facebook_url,
        instagram_url: data?.instagram_url,
        linkedin_url: data?.linkedin_url,
        twitter_url: data?.twitter_url,
        latitude: data?.latitude,
        longitude: data?.longitude,
    }
    
    return {
        userProfileBannerData,
        userProfileAboutCardData,
        teacherInformation
    };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['profile', id],
    queryFn: () => getTeacher(id),
    staleTime: 3 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!id,
  });

  return {
    data,
    isSuccess,
    isLoading,
  };
}