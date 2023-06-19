import { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTeacherReviews } from '../../services/teacherService';

export default function useListTeacher() {
    const { id } = useParams();

  const parseData = useCallback((data) => {
    return data.map((item) => ({
        id: item.id,
        name: item.name,
        stars: item.rating,
        teacher_id: item.teacher_id,
        user_id: item.user_id,
        content: item.content,
        avatar_url: item.avatar_url || 'https://i.pravatar.cc/300',
        review_day: 'test',
    }));
  }, []);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['tutor-review', id],
    queryFn: () => getTeacherReviews(id),
    staleTime: 10 * 1000,
    select: (data) => parseData(data.data),
    enabled: !!id,
  });

  return {
    reviews: data || [],
    isSuccess,
    isLoading,
  };
}
