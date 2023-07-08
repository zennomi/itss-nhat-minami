import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTeacherByUserId, getTeacher } from '../../services/teacherService';

export default function useListTeacher() {
  const { id } = useParams();

  const initialData = {
    id: 0,
    photo_url: '',
    background_image_url: '',
    name: '',
    gender: '',
    address: '',
    latitude: 0,
    longitude: 0,
    lang_teach: '',
    date_of_birth: '',
    country_of_birth: '',
    description: '',
    certificates: [
      {
        language_code: '',
        level: '',
      },
    ],
    phone_number: '',
    gmail: '',
    resume_url: '',
    linkedin_url: '',
    twitter_url: '',
    facebook_url: '',
    instagram_url: '',
  }

  const parseData = useCallback((data) => {
    const profile = {
      id: data?.id || null,
      photo_url: data?.photo_url ? (data.photo_url.startsWith("http") ? data.photo_url : `http://tungsnk.tech:9999${data?.photo_url}`) : '',
      background_image_url: data?.background_image_url ? (data.background_image_url.startsWith("http") ? data.background_image_url : `http://tungsnk.tech:9999${data?.background_image_url}`) : '',
      name: data?.name || '',
      gender: data?.gender || '',
      address: data?.address || '',
      latitude: data?.latitude || 0,
      longitude: data?.longitude || 0,
      lang_study: data?.lang_study || '',
      lang_teach: data?.lang_teach || '',
      date_of_birth: data?.date_of_birth || '',
      country_of_birth: data?.country_of_birth || '',
      description: data?.description || '',
      certificates: data?.certificates || [],
      phone_number: data?.phone_number || '',
      gmail: data?.gmail || '',
      resume_url: data?.resume_url || '',
      linkedin_url: data?.linkedin_url || '',
      twitter_url: data?.twitter_url || '',
      facebook_url: data?.facebook_url || '',
      instagram_url: data?.instagram_url || '',
      price: data?.price || '',
      hours: data?.hours || '',
    }
    console.log(profile);
    return profile;
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['profile', id],
    queryFn: async () => {
      const teacherIdResponse = await getTeacherByUserId(id);
      const teacherId = teacherIdResponse.data?.id || null;
      if (teacherId) {
        const teacherResponse = await getTeacher(teacherId);
        console.log(teacherResponse.data);
        return parseData(teacherResponse.data);
      }
    },
    staleTime: 120 * 1000,
    enabled: !!id,
  });

  return {
    teacher: data || initialData,
    isSuccess,
    isLoading,
  };
}