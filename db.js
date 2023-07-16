const mongoose=require('mongoose')
// require('dotenv').config()

const connection = mongoose.connect('mongodb+srv://sajjak2506:sajjakali@cluster0.puywhdu.mongodb.net/assignment_practice?retryWrites=true&w=majority')

module.exports=connection;
