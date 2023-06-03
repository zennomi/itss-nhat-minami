import api from "../utils/api";

const USER = {
    getUser: async ({user_id = "", username = ""}) => {
        return await api(`/user/get?user_id=${user_id}&username=${username}`, 'GET');
    },
    me: async () => {
        return await api('/user/me', 'GET');
    },
    register: async (username, password) => {
        let result = await api('/user/register', 'POST', {username, password});
        if (result.message === 'USER_CREATED')
            localStorage.setItem('token', result.token);
        return result;
    },
    login: async (username, password) => {
        let result = await api('/user/login', 'POST', {username, password});
        if (result.message === 'LOGIN_SUCCESS') {
            localStorage.setItem('token', result.token);
        }
        return result;
    },
    logout: async () => {
        localStorage.removeItem('token');
        return await api('/user/logout', 'POST');
    },
    changePassword: async (old_password, new_password) => {
        return await api('/user/change-password', 'POST', {old_password, new_password});
    },
    setRole: async (user_id, role) => {
        return await api('/user/set-role', 'POST', {user_id, role});
    }
}

export default USER;
