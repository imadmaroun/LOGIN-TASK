const jwt = require('jsonwebtoken')

require('dotenv').config();
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    const {valid, decodedToken} = validateToken(token)
    if (!valid) {
        return res.status(401).json({
            message: "Unauthorized login"
        })
    }
    next()
}

const validateToken = token =>{
    const secretKey = process.env.SECRET_KEY
    const decodedToken = jwt.verify(token, secretKey)
    return {
        valid: true,
        decodedToken: decodedToken
    }
}

const generateToken = payload => {
    const secretKey = process.env.SECRET_KEY
    const token = jwt.sign(payload, secretKey)
    return token
}

module.exports = {authenticate, generateToken}