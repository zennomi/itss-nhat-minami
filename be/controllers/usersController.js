const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const DB = require('../database');
const {ROLE} = require('../middlewares/auth');

const USER = {

    getUser: async (req, res) => {
        let user_id = req.query.id || null;
        let username = req.query.username || null;
        if (user_id === null && username === null) {
            return res.status(400).json({message: 'BAD_REQUEST'});
        }

        try {
            let user = await DB.getUserInfo({user_id, username});
            user ? delete user.hash_password : null;
            return res.status(200).json(user || {message: 'USER_NOT_FOUND'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    me: async (req, res) => {
        try {
            let user = await DB.getUserInfo({user_id: req.user_id});
            user ? delete user.hash_password : null;
            return res.status(200).json(user || {message: 'USER_NOT_FOUND'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    updateInfo: async (req, res) => {
        let user_id = req.user_id;
        let full_name = req.body.full_name || null;
        let email = req.body.email || null;
        let phone = req.body.phone || null;
        let address = req.body.address || null;

        if (full_name === null && email === null && phone === null && address === null) {
            return res.status(400).json({message: 'BAD_REQUEST'});
        }
        try {
            await DB.updateUserInfos(user_id, {full_name, email, phone, address});
            return res.status(200).json({message: 'UPDATE_SUCCESS'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    validate: (username, password) => {
        if (!username)
            return {message: 'USERNAME_REQUIRED'};
        if (!password)
            return {message: 'PASSWORD_REQUIRED'};
        if (!validator.isAlphanumeric(username) || !validator.isLength(username, {min: 3, max: 20})) {
            return {message: 'USERNAME_INVALID'};
        }

        if (!validator.isLength(password, {min: 3, max: 20})) {
            return {message: 'PASSWORD_INVALID'};
        }
        return null;
    },

    register: async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        let error = USER.validate(username, password);
        if (error) {
            return res.status(400).json(error);
        }

        try {
            let user = await DB.getUserInfo({username});
            if (user) {
                return res.status(400).json({message: 'USERNAME_EXISTS'});
            }

            const hash = await bcrypt.hash(password, 10);
            let user_id = await DB.createUser(username, hash);
            const token = jwt.sign({user_id}, process.env.JWT_SECRET || 'secret');
            await DB.addSession(user_id, token);
            return res.status(201).json({message: 'USER_CREATED', user_id, token});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },

    login: async (req, res) => {
        let username = req.body.username
        let password = req.body.password;

        let error = USER.validate(username, password);
        if (error) {
            return res.status(400).json(error);
        }

        try {
            let user = await DB.getUserInfo({username});
            if (user) {
                const match = await bcrypt.compare(password, user.hash_password);
                if (match) {
                    const user_id = user.user_id;
                    const token = jwt.sign({user_id}, process.env.JWT_SECRET || 'secret');
                    await DB.addSession(user_id, token);
                    return res.status(200).json({message: 'LOGIN_SUCCESS', user_id, token});
                } else {
                    return res.status(400).json({message: 'LOGIN_FAIL'});
                }
            } else {
                return res.status(400).json({message: 'LOGIN_FAIL'});
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }

    },
    changePassword: async (req, res) => {
        let user_id = req.user_id;
        let old_password = req.body.old_password;
        let new_password = req.body.new_password;

        if (!old_password || !new_password) {
            return res.status(400).json({message: 'BAD_REQUEST'});
        }

        let error = USER.validate("123", new_password);
        if (error) {
            return res.status(400).json(error);
        }

        try {
            let user = await DB.getUserInfo({user_id});
            if (user) {
                const match = await bcrypt.compare(old_password, user.hash_password);
                if (match) {
                    const hash = await bcrypt.hash(new_password, 10);
                    await DB.changePassword(user_id, hash);
                    return res.status(200).json({message: 'PASSWORD_CHANGED'});
                } else {
                    return res.status(400).json({message: 'PASSWORD_NOT_MATCH'});
                }
            } else {
                return res.status(400).json({message: 'USER_NOT_FOUND'});
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    logout: async (req, res) => {
        try {
            await DB.deleteSession(req.user_id);
            return res.status(200).json({message: 'LOGOUT_SUCCESS'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    setRole: async (req, res) => {
        let user_id = req.body.user_id;
        let role = req.body.role;
        if (!user_id || !role || !Object.values(ROLE).includes(role)) {
            return res.status(400).json({message: 'BAD_REQUEST'});
        }

        try {
            let user = await DB.getUserInfo({user_id});
            if (user) {
                await DB.setRole(user_id, role);
                return res.status(200).json({message: 'ROLE_CHANGED'});
            } else {
                return res.status(400).json({message: 'USER_NOT_FOUND'});
            }
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    }
};

module.exports = USER;
