const postModel = require('../models/post.model');
const generateCaption = require('../service/ai.service')
const uploadFIle = require("../service/storage.service");
const {v4: uuidv4} = require('uuid');

async function createPostController(req, res) {
    const file = req.file 
    // console.log("File Received: ", file)

    const base64Image = new Buffer.from(file.buffer).toString('base64');
    // console.log(base64Image)
    const caption = await generateCaption(base64Image);

    const result = await uploadFIle(file.buffer, `${uuidv4()}`)
    // console.log(caption)
   const post = await postModel.create({
        caption: caption,
        image: result.url,
        user: req.user._id
   })

   res.status(201).json({
        Message : "Post create successfully",
        post
   })
}

module.exports = {
    createPostController
}