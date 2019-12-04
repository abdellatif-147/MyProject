var mongoose = require('mongoose')



var usermodel = new mongoose.model('user', new mongoose.Schema({
    username : { type : String , unique : true} ,
    password : String ,
    phone : {type:Number , require:true , unique:true } ,
    email : String
}))

module.exports = usermodel