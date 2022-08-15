const courses = require('../../models/Courses')
class NewsController{
    //[get]/news
    index(req, res){
        res.render('new')
    }
    show(req, res){
        res.send('newdetail !!!')
    }
}
module.exports = new NewsController

