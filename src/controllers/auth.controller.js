const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");

/* API ke logic ham isma write karta hai */
async function registerController(req, res) {
    const {username, password} = req.body;

    const isUserAlreadyExiste = await userModel.findOne({
        username
    })

    if(isUserAlreadyExiste){
        return res.status(409).json({
            Message : `Change username ${username} is already taken.`
        })
    }

    const user = await userModel.create({
        username, 
        password: await bcryptjs.hash(password, 10)   //(password, slat)
    })

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

    res.cookie('token', token)

    return res.status(201).json({
        Message : "User Profile created",
        username
    })

}

async function loginController(req, res) {
    const {username, password} = req.body;

    const  findUser = await userModel.findOne({
        username
    })
    if(!findUser){
        return res.status(400).json({
            Message : "User not found."
        })
    }
    
    // const checkPassword = findUser.password === password
    const checkPassword = await bcryptjs.compare(password, findUser.password);
    
    if(!checkPassword){
        return res.status(401).json({
            Message : "Please enter valid password."
        })
    }

    const token = jwt.sign({id : findUser._id}, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(200).json({
        Message : "User find success.",
        findUser
    })
}
   

module.exports = {
    registerController, loginController
}