"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Courses = require('../../models/Courses');

var _require = require('../../util/mongoose'),
    mongooseToObject = _require.mongooseToObject;

var CoursesController =
/*#__PURE__*/
function () {
  function CoursesController() {
    _classCallCheck(this, CoursesController);
  }

  _createClass(CoursesController, [{
    key: "show",
    //[get]/courses/slug
    value: function show(req, res, next) {
      Courses.findOne({
        slug: req.params.slug
      }).then(function (course) {
        res.render('courses/show', {
          course: mongooseToObject(course)
        });
      })["catch"](next);
    } //[get]/courses/create

  }, {
    key: "create",
    value: function create(req, res, next) {
      res.render('courses/create');
    } //[post]/courses/store

  }, {
    key: "store",
    value: function store(req, res, next) {
      var formData = req.body;
      formData.img = "https://files.fullstack.edu.vn/f8-prod/courses/7.png";
      var courses = new Courses(formData);
      courses.save().then(function () {
        return res.redirect('/');
      })["catch"](next);
    } //[get]/courses/:_id/edit

  }, {
    key: "edit",
    value: function edit(req, res, next) {
      Courses.findById(req.params._id).then(function (courses) {
        return res.render('courses/edit', {
          courses: mongooseToObject(courses)
        });
      })["catch"](next);
    } //[put]/courses/edit/update

  }, {
    key: "update",
    value: function update(req, res, next) {
      Courses.updateOne({
        _id: req.params._id
      }, req.body).then(function () {
        return res.redirect('/me/stored/courses');
      })["catch"](next);
    } //[delete]/courses/id/delete

  }, {
    key: "delete",
    value: function _delete(req, res, next) {
      Courses.deleteOne({
        _id: req.params._id
      }).then(function () {
        return res.redirect('back');
      })["catch"](next);
    }
  }]);

  return CoursesController;
}();

module.exports = new CoursesController();