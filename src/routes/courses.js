const express = require('express')
const router = express.Router();
const CoursesController = require('../app/controllers/coursesController')
//newsController.index
router.get('/:slug',CoursesController.show)

module.exports = router