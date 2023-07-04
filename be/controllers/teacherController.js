const DB = require('../database');

const TEACHER = {
    search: async (req, res) => {
        let lang_study = req.query.lang_study || null;
        let lang_teach = req.query.lang_teach || null;
        let purpose = req.query.purpose || null;
        let price = req.query.price || null;
        let gioitinh = req.query.sex || null;
        let age = req.query.age || null;
        let star = req.query.star || null;
        let date = req.query.date || null;
        let timesession = req.query.timesession || [];
        let longitude = req.query.longitude || null;
        let latitude = req.query.latitude || null;
        let radius = req.query.radius || null;
        let page = req.query.page || null;
        let limit = req.query.limit || null;

        try {
            let kq = await DB.searchTeacher({
                lang_study,
                lang_teach,
                purpose,
                price,
                gioitinh,
                age,
                star,
                date,
                timesession,
                longitude,
                latitude,
                radius,
                page,
                limit
            });
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    getTeacher: async (req, res) => {
        let id = req.params.id || null;
        try {
            let kq = await DB.getTeacherInfos(id);
            if (!kq.id)
                return res.status(404).json({message: 'NOT_FOUND'});
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    updateTeacher: async (req, res) => {
        let userId = req.user_id;
        let params = {
            lang_teach: req.body.lang_teach || null,
            lang_study: req.body.lang_study || null,
            purpose: req.body.purpose || null,
            price: req.body.price || null,
            phone_number: req.body.phone_number || null,
            resume_url: req.body.resume_url || null,
            website_url: req.body.website_url || null,
            facebook_url: req.body.facebook_url || null,
            instagram_url: req.body.instagram_url || null,
            linkedin_url: req.body.linkedin_url || null,
            twitter_url: req.body.twitter_url || null,
            name: req.body.name || null,
            gender: req.body.gender || null,
            date_of_birth: req.body.date_of_birth || null,
            certificates: req.body.certificates || [],
            country_of_birth: req.body.country_of_birth || null,
            description: req.body.description || null,
            address: req.body.address || null,
            longitude: req.body.longitude || null,
            latitude: req.body.latitude || null,
        };
        let teacherId = await DB.getTeacherByUserId(userId);
        try {
            if(teacherId === null) {
                let res = await DB.createTeacher(userId, params);
                let teacher_id_new = res.id;
                await DB.updateCertificates(teacher_id_new, params.certificates);
                await DB.updateUserInfos(userId, params);
                return res.status(200).json(await DB.getTeacherInfos(teacher_id_new));

            }
            await DB.updateTeacherInfos(teacherId, params);
            await DB.updateCertificates(teacherId, params.certificates);
            let kq = await DB.getTeacherInfos(teacherId);
            await DB.updateUserInfos(kq.user_id, params);
            return res.status(200).json(await DB.getTeacherInfos(teacherId));
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    addReview: async (req, res) => {
        let teacherId = req.body.teacher_id;
        let userId = req.user_id;
        let star = req.body.star;
        let content = req.body.content;
        if (!teacherId || !userId || !star || !content) return res.status(400).json({message: 'MISSING_FIELDS'});
        try {
            await DB.addReview(teacherId, userId, star, content);
            return res.status(200).json({message: 'OK'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    getReviewsByTeacherId: async (req, res) => {
        let teacherId = req.params.id;
        if (!teacherId) return res.status(400).json({message: 'MISSING_FIELDS'});
        try {
            let kq = await DB.getReviewsByTeacherId(teacherId);
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    upBackGround: async (req, res) => {
        let teacherId = req.body.teacher_id;
        let bg = req.files?.file;
        if (!teacherId || !bg) return res.status(400).json({message: 'MISSING_FIELDS'});
        let newName = __dirname + "/../public/files/bg" + teacherId + ".jpg";
        if (req.files && req.files.file) {
            await bg.mv(newName);
            try {
                await DB.updateTeacherInfos(teacherId, {background_image_url: "/files/bg" + teacherId + ".jpg"});
                return res.status(200).json({message: 'OK'});
            } catch (e) {
                console.log(e);
                return res.status(500).json({message: 'DATABASE_ERROR'});
            }
        }
    },
    upAvatar: async (req, res) => {
        let teacherId = req.body.teacher_id;
        let bg = req.files?.file;
        if (!teacherId || !bg) return res.status(400).json({message: 'MISSING_FIELDS'});
        let newName = __dirname + "/../public/files/avatar" + teacherId + ".jpg";
        if (req.files && req.files.file) {
            await bg.mv(newName);
            try {
                await DB.updateTeacherInfos(teacherId, {photo_url: "/files/avatar" + teacherId + ".jpg"});
                return res.status(200).json({message: 'OK'});
            } catch (e) {
                console.log(e);
                return res.status(500).json({message: 'DATABASE_ERROR'});
            }
        }
    },
    addBookmark: async (req, res) => {
        let teacherId = req.body.teacher_id;
        let userId = req.body.user_id;
        if (!teacherId || !userId) return res.status(400).json({message: 'MISSING_FIELDS'});
        try {
            await DB.addBookmark(userId, teacherId);
            return res.status(200).json({message: 'OK'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    removeBookmark: async (req, res) => {
        let teacherId = req.body.teacher_id;
        let userId = req.body.user_id;
        if (!teacherId || !userId) return res.status(400).json({message: 'MISSING_FIELDS'});
        try {
            await DB.removeBookmark(userId, teacherId);
            return res.status(200).json({message: 'OK'});
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    getBookmarks: async (req, res) => {
        let userId = req.params.id;
        if (!userId) return res.status(400).json({message: 'MISSING_FIELDS'});
        try {
            let kq = await DB.getBookmarksByUserId(userId);
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    }
}

module.exports = TEACHER;
