const express = require('express');
const TEACHER = require('../controllers/teacherController');
const {auth} = require("../middlewares/auth");
const router = express.Router();

router.get('/search', TEACHER.search);
router.get('/teacher/:id', TEACHER.getTeacher);
router.put('/teacher', TEACHER.updateTeacher);
router.post('/review', TEACHER.addReview);
router.get('/review/:id', TEACHER.getReviewsByTeacherId);
router.post('/bg', TEACHER.upBackGround);
router.post('/avatar', TEACHER.upAvatar);
module.exports = router;
