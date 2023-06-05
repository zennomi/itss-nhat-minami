const jwt = require('jsonwebtoken');
const {checkSession, getUserInfo} = require("../database");

const AUTH = {
    ROLE: {
        ADMIN: 2,
        TEACHER: 1,
        STUDENT: 0
    },
    auth: async (req, res, next) => {
        try {
            const token = req.header('Authorization').replace('Bearer ', '');
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
            const isValid = await checkSession(decoded.user_id, token);
            if (!isValid) {
                return res.status(401).json({message: 'TOKEN_NOT_AVAILABLE'});
            }
            req.user_id = decoded.user_id;
            next();
        } catch (e) {
            return res.status(401).json({message: 'UNAUTHORIZED'});
        }
    },
    role: (role, only = false) => {
        return async (req, res, next) => {
            let user = await getUserInfo({user_id: req.user_id});
            if (user.role === role || (!only && user.role > role)) {
                next();
            } else {
                return res.status(401).json({message: 'PERMISSION_DENIED'});
            }

        }
    },
}
module.exports = AUTH;
