var mongoose = require('mongoose')

function dbconnection () { 
return mongoose.connect(process.env.'mongodb+srv://abdo:qFErftZFTLUKj5rp@users-vymnu.mongodb.net/userdata?retryWrites=true&w=majority')
}


module.exports=dbconnection  