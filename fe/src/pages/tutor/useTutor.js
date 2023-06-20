import { useCallback, useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTeacher } from '../../services/teacherService';
import { flagLanguageImg } from '../../utils/constant';

export default function useListTeacher() {
  const { id } = useParams();

  const parseData = useCallback((data) => {
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
        schedules: [...data?.schedules],
    }
    
    return {
        userProfileBannerData,
        userProfileAboutCardData,
        teacherInformation
    };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['tutor', id],
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