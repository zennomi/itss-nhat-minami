import { useCallback, useMemo, useEffect, useState } from 'react';
import useQueryString from '../../hooks/useQueryString';
import { useQuery } from '@tanstack/react-query';
import { getTeachers } from '../../services/teacherService';
import { sleep } from '../../utils/helpers';

export default function useListTeacher() {
  const [totalPage, setTotalPage] = useState(1);

  const defaultQueryString = useMemo(() => {
    return {
      page: 1,
      limit: 10,
    };
  }, []);

  const { queryString, setQueryString } = useQueryString();

  const { page, limit } = queryString;

  const parseData = useCallback((data) => {
    const teachers = data?.teacher?.map((item) => {
      return {
        id: item.id,
        user_id: item.user_id,
        certificate_id: item.certificate_id,
        price: item.price,
        resume_url: item.resume_url,
        country_of_birth: item.country_of_birth,
        phone_number: item.phone_number,
        facebook_url: item.facebook_url,
        twitter_url: item.twitter_url,
        website_url: item.website_url,
        photo_url: item.photo_url,
        is_verified: item.is_verified,
        remote: item.remote,
        latitude: item.latitude,
        longitude: item.longitude,
        lang_study: item.lang_study,
        lang_teach: item.lang_teach,
        linkedin_url: item.linkedin_url,
        instagram_url: item.instagram_url,
        background_image_url: item.background_image_url,
        purpose: item.purpose,
        star: item.star,
        name: item.name,
        gender: item.gender,
        date_of_birth: item.date_of_birth,
        age: item.age,
      };
    });
    const pagination = {
      total: data.pagination.total,
      currentPage: data.pagination.currentPage,
      totalPage: data.pagination.totalPage,
      limit: data.pagination.limit,
    };
    return { pagination, teachers };
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['teachers', queryString],
    queryFn: () => getTeachers(queryString),
    staleTime: 20 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!page && !!limit,
  });

  const handlePageChange = useCallback(
    (e, value) => {
      setQueryString({ ...queryString, page: value });
    },
    [queryString, setQueryString],
  );

  useEffect(() => {
    if (data?.pagination?.totalPage !== undefined) {
      setTotalPage(data.pagination.totalPage);
    }
  }, [data?.pagination?.totalPage]);

  useEffect(() => {
    if (!page || !limit) {
      setQueryString(defaultQueryString);
    }
  }, [defaultQueryString, limit, page, queryString, setQueryString]);

  return {
    listTeachers: data?.teachers,
    pagination: data?.pagination,
    isSuccess,
    isLoading,
    page,
    limit,
    totalPage: totalPage,
    handlePageChange,
    queryString, setQueryString
  };
}