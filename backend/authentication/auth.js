const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.SECRET_KEY;


exports.generateToken = (user) => {
    return jwt.sign({ id: user._id, admin: user.admin }, secretKey, { expiresIn: '2h' })
}


exports.verifyToken = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        req.userData = jwt.verify(token, secretKey)
        next();
    }
    catch {
        return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Access denied... Please login!'
        })
    }
}

exports.verifyTokenAndAdmin = (req, res, next) => {

        const token = req.headers.authorization.split(" ")[1];
        req.userData = jwt.verify(token, secretKey)
        if(req.userData.admin) {
            next();
        }
        else {
            return res.status(401).json({
                statusCode: 401,
                status: false,
                message: 'Access denied... Please login!'
            })            
        }    

}

