"use strict";

var express = require('express');

var router = express.Router();

var CoursesController = require('../app/controllers/coursesController'); //newsController.index


router.get('/create', CoursesController.create);
router.post('/store', CoursesController.store);
router.get('/:slug', CoursesController.show);
router.get('/:_id/edit', CoursesController.edit);
router.put('/:_id', CoursesController.update);
router["delete"]('/:_id', CoursesController["delete"]);
module.exports = router;