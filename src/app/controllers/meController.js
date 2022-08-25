const courses = require('../../models/Courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class meController{
    //[get]/me
    storeCourses(req, res, next){
        courses.find({})
        .then(courses =>{  
            res.render('me/stored-courses',{
                courses:mutipleMongooseToObject(courses)
            })
        })
        .catch(next)
    }
}
module.exports = new meController