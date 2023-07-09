const express = require('express');
const TEACHER = require('../controllers/teacherController');
const {auth} = require("../middlewares/auth");
const router = express.Router();

router.get('/search', TEACHER.search);
router.get('/teacher/:id', TEACHER.getTeacher);
router.get('/review/:id', TEACHER.getReviewsByTeacherId);
router.post('/bg', auth, TEACHER.upBackGround);
router.post('/avatar', auth, TEACHER.upAvatar);
router.post('/review', auth, TEACHER.addReview);
router.post('/add_bookmark', auth, TEACHER.addBookmark);
router.get('/bookmarks/:id', TEACHER.getBookmarks);
router.delete('/bookmarks', auth, TEACHER.removeBookmark);
router.put('/teacher', auth, TEACHER.updateTeacher);
router.get('/teacherbyuser', TEACHER.getTeacherByUserId);
module.exports = router;
