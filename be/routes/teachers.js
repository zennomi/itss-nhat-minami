const express = require('express');
const TEACHER = require('../controllers/teacherController');
const router = express.Router();

router.get('/search', TEACHER.search);
module.exports = router;
