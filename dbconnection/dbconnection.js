var mongoose = require('mongoose')

function dbconnection () {
mongoose.connect('mongodb+srv://abdo:qFErftZFTLUKj5rp@users-vymnu.mongodb.net/userdata?retryWrites=true&w=majority')
}


module.exports=dbconnection  