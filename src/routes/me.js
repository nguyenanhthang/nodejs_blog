const express = require('express')
const router = express.Router();
const meController = require('../app/controllers/meController')
//newsController.index
router.get('/stored/courses',meController.storeCourses)

module.exports = router