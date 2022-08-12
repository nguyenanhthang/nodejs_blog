const mongoose = require('mongoose');
async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/blog');
        console.log('success!!')
    }
    catch(error){
        console.log('error')
    }
}

module.exports= {connect};