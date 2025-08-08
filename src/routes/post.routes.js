const express = require('express');
// const jwt = require('jsonwebtoken');
// const userModel = require('../models/user.model')
const multer = require('multer')
const authMiddleware = require('../middlewares/auth.middlewares');
// const multer = require('multer');
const {createPostController} = require('../controllers/post.controller')


const router = express.Router();
const upload = multer({storage: multer.memoryStorage()}) // DB can read file data 

/* POST /api/posts [protected] {image-file}*/
// Work as /api/posts because we give name app.js

router.post('/',
    authMiddleware, /* req.user = userData */
    upload.single('image'), // createPostController par file ka access nhi jaa pata is liya use kar  
    createPostController)

module.exports = router;