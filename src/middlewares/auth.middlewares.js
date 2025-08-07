const userModel = require("../models/user.model");
const jwt = require('jsonwebtoken');


async function authMiddleware(req, res, next){  // next to forward request
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
        // we can say we set data to req.user of user that we find 
        req.user = user
        
        // Call next to forward your request 
        next()

    } catch (err) {
        return res.status(401).json({
            Message : "Invalid token, please login again"
        })
    }
}

module.exports = authMiddleware;