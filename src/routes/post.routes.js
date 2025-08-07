const express = require('express');
// const jwt = require('jsonwebtoken');
// const userModel = require('../models/user.model')
const upload = multer({storage: multer.memoryStorage()}) // DB can read file data 

const authMiddleware = require('../middlewares/auth.middlewares');
const multer = require('multer');
const createPostController = require('../controllers/post.controller')


const router = express.Router();

/* POST /api/posts [protected] {image-file}*/
// Work as /api/posts because we give name app.js

router.post('/',
    authMiddleware, /* req.user = userData */
    upload.single('image'), // createPostController par file ka access nhi jaa pata is liya use kar  
    createPostController)

/* Use as middleware full code*/
/* router.post('/', async(req, res) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({
            Message : "Unauthorized access"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findOne({
            _id: decoded.id 
        })

        // create new property in req req.user / req.anything
        // req.user = user
        res.status(200).json({
            Message : "User Profile",
            user
        })

    } catch (err) {
        return res.status(401).json({
            Message : "Invalid token, please login again"
        })
    }
})
*/

module.exports = router;