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
            if(!kq.id)
                return res.status(404).json({message: 'NOT_FOUND'});
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    },
    updateTeacher: async (req, res) => {
        let teacherId = req.body.teacher_id;
        if (!teacherId) return res.status(400).json({message: 'MISSING_FIELDS'});
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
        };
        try {
            await DB.updateTeacherInfos(teacherId, params);
            let kq = await DB.getTeacherInfos(teacherId);
            return res.status(200).json(kq);
        } catch (e) {
            console.log(e);
            return res.status(500).json({message: 'DATABASE_ERROR'});
        }
    }
}

module.exports = TEACHER;
