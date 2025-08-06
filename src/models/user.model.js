const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    username:{
        type:String,
        // mongoose schema validation
        unique:true,    
        require:true
    },
    password: {
        type:String,
        require:true
    }
} 
)



const userModel = mongoose.model('user', userSchema)


module.exports = userModel

