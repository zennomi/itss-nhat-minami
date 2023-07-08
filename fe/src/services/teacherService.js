import publicHttp from "./http/publicHttp.config";
import privateHttp from "./http/privateHttp.config";

export const getTeachers = async (params) => {
    return publicHttp({
        method: 'GET',
        url: '/api/search',
        params
    })
}

export const getTeacher = async (id) => {
    return publicHttp({
        method: 'GET',
        url: `/api/teacher/${id}`,
    })
}

export const getTeacherByUserId = async (id) => {
    return publicHttp({
        method: 'GET',
        url: `/api/teacherbyuser?user_id=${id}`,
    })
}

export const getTeacherReviews = async (id) => {
    return publicHttp({
        method: 'GET',
        url: `/api/review/${id}`,
    })
}

export const updateTeacherBg = async (data) => {
    return privateHttp({
        method: 'POST',
        url: '/api/bg',
        headers: {
            'Content-Type': 'multipart/form-data',
          },      
        data
    })
}

export const updateTeacherAvatar = async (data) => {
    return privateHttp({
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
          },   
        url: '/api/avatar',
        data
    })
}

export const updateTeacherInfo = async (data) => {
    return privateHttp({
        method: 'PUT',
        url: '/api/teacher',
        data
    })
}

export const getBookmark = async (id) => {
    return publicHttp({
        method: 'GET',
        url: `/api/bookmarks/${id}`,
    })
}

export const addBookmark = async ({
    teacher_id,
    user_id
}) => {
    return privateHttp({
        method: 'POST',
        url: '/api/add_bookmark',
        data: {
            teacher_id,
            user_id
        }
    })
}

export const addReview = async ({
    teacher_id,
    user_id,
    star,
    content
}) => {
    return privateHttp({
        method: 'POST',
        url: '/api/review',
        data: {
            teacher_id,
            user_id,
            star,
            content
        }
    })
}

export const removeBookmark = async ({
    teacher_id,
    user_id
}) => {
    return privateHttp({
        method: 'DELETE',
        url: '/api/bookmarks',
        data: {
            teacher_id,
            user_id
        }
    })
}