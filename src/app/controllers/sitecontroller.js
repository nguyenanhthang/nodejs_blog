const courses = require('../../models/courese')
const {mutipleMongooseToObject} = require('../../util/mongoose')
class NewsController{
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
module.exports = new NewsController