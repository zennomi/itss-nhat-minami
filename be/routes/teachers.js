const express = require('express');
const TEACHER = require('../controllers/teacherController');
const {auth} = require("../middlewares/auth");
const router = express.Router();

router.get('/search', TEACHER.search);
router.get('/teacher/:id', TEACHER.getTeacher);
router.get('/review/:id', TEACHER.getReviewsByTeacherId);
router.post('/bg', TEACHER.upBackGround);
router.post('/avatar', TEACHER.upAvatar);
router.post('/review', auth, TEACHER.addReview);
router.post('/add_bookmark', TEACHER.addBookmark);
router.get('/bookmarks/:id', TEACHER.getBookmarks);
router.delete('/bookmarks', TEACHER.removeBookmark);
router.put('/teacher', TEACHER.updateTeacher);
module.exports = router;
