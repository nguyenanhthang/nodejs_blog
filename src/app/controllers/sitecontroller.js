const courses = require('../../models/Courses')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController{
    //[get]/news
    index(req, res,next){
        courses.find({})
        .then(courses =>{
            res.render('home',{
                courses:mutipleMongooseToObject(courses)
            })}
        )
        .catch(next)
    }
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController