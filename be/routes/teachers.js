const express = require('express');
const TEACHER = require('../controllers/teacherController');
const {auth} = require("../middlewares/auth");
const router = express.Router();

router.get('/search', TEACHER.search);
router.get('/teacher/:id', TEACHER.getTeacher);
router.put('/teacher', auth, TEACHER.updateTeacher);
module.exports = router;
