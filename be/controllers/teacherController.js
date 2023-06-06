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
    }
}

module.exports = TEACHER;
