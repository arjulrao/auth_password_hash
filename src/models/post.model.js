const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    image: String,  //url (by imagekit)
    caption: String, 
    //When store user id
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"  // Which collection belong to (MongoDB)
    }
})


const postModel = mongoose.model("posts", postSchema);


module.exports = postModel;