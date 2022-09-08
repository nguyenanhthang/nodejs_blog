const Courses = require('../../models/Courses')
const {mongooseToObject} = require('../../util/mongoose')
class CoursesController{
    //[get]/courses/slug
    show(req, res, next){
        Courses.findOne({slug: req.params.slug})
        .then(course=>{
            res.render('courses/show',{
                course:mongooseToObject(course)
            })
        })
        .catch(next)
    }
    //[get]/courses/create
    create(req,res,next){
        res.render('courses/create')
    }
    //[post]/courses/store
    store(req,res,next){
        const formData = req.body
        formData.img=`https://files.fullstack.edu.vn/f8-prod/courses/7.png`
        const courses = new Courses(formData)
        courses.save()
        .then(()=> res.redirect('/'))
        .catch(next)
    }
    //[get]/courses/:_id/edit
    edit(req,res,next){
        Courses.findById(req.params._id)
            .then(courses=> res.render('courses/edit',{
                courses:mongooseToObject(courses)
            }))
            .catch(next)
    }
    //[put]/courses/edit/update
    update(req,res,next){
        Courses.updateOne({_id:req.params._id},req.body)
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(next)
    }
    //[delete]/courses/id/delete
    delete(req,res,next){
        Courses.deleteOne({_id:req.params._id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
}
module.exports = new CoursesController