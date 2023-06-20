import publicHttp from "./http/publicHttp.config";

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

export const getTeacherReviews = async (id) => {
    return publicHttp({
        method: 'GET',
        url: `/api/review/${id}`,
    })
}

export const updateTeacherBg = async (data) => {
    console.log(data)
    return publicHttp({
        method: 'POST',
        url: '/api/bg',
        data
    })
}

export const updateTeacherAvatar = async (data) => {
    console.log(data)
    return publicHttp({
        method: 'POST',
        url: '/api/avatar',
        data
    })
}

export const updateTeacherInfo = async (data) => {
    return publicHttp({
        method: 'PUT',
        url: '/api/teacher',
        data
    })
}
