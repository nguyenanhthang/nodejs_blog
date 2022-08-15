const Courses = require('../../models/Courses')
const {mongooseToObject} = require('../../util/mongoose')
class CoursesController{
    //[get]/news
    show(req, res, next){
        Courses.findOne({slug: req.params.slug})
        .then(course=>{
            res.render('courses/show',{
                course:mongooseToObject(course)
            })
        })
        .catch(next)
    }
}
module.exports = new CoursesController