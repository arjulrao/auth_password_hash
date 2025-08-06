const express = require("express");
// const userModel = require("../models/user.model");
// const jwt = require('jsonwebtoken');
const router = express.Router()
const {registerController, loginController} = require('../controllers/auth.controller')


/* Move to controllers */
// router.post('/register', async(req, res) => {
//     const {username, password} = req.body;

//     const existingUser = await userModel.findOne({
//         username
//     })
//     if(existingUser){
//         return res.status(409).json({
//             Message : `Change username! ${username} is already taken.`
//         })
//     }
//     const user = await userModel.create({
//         username, password
//     })

//     const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

//     res.cookie('token', token)

//     res.status(201).json({
//         Message : "Profile Create Success.",
//         username
//     })
// })
 
/* Kon kon se API hai is ma show karta hai */
router.post('/register', registerController)

router.post('/login', loginController)

module.exports = router;