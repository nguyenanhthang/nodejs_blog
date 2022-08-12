const courses = require('../../models/courese')
class NewsController{
    //[get]/news
    index(req, res){
        courses.find({},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(400).json({error:'error!!'})
            }
        })
        res.render('home')
    }
    search(req, res){
        res.render('search');
    }
}
module.exports = new NewsController