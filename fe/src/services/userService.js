import privateHttp from './http/privateHttp.config';
import publicHttp from './http/publicHttp.config';

const USER = {
    getUser: ({ user_id = "", username = "" }) => privateHttp({
        method: 'GET',
        url: '/user/get',
        param: {
            user_id,
            username
        }
    }),
    me: () => privateHttp({
        method: 'GET',
        url: '/user/me'
    }),
    register: async ({ username, password }) => {
        let result = await publicHttp({
            method: 'POST',
            url: '/user/register',
            data: {
                username,
                password
            }
        })
        if (result.message === 'USER_CREATED')
            localStorage.setItem('token', result.token);
        return result;
    },
    login: async (username, password) => {
        let result = await publicHttp({
            method: 'POST',
            url: '/user/login',
            data: {
                username,
                password
            }
        });
        if (result.message === 'LOGIN_SUCCESS') {
            localStorage.setItem('token', result.token);
        }
        return result;
    },
    logout: () => {
        localStorage.removeItem('token');
        return privateHttp(
            {
                method: 'POST',
                url: '/user/logout'
            }
        );
    },
    changePassword: (old_password, new_password) => {
        return privateHttp({
            method: 'POST',
            url: '/user/change-password',
            data: {
                old_password,
                new_password
            }
        });
    },
    setRole: (user_id, role) => {
        return privateHttp({
            method: 'POST',
            url: '/user/set-role',
            data: {
                user_id,
                role
            }
        });
    }
}

export default USER;
