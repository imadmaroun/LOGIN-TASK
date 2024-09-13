const express = require('express')
const router = express.Router();
const{authenticate} = require('../Services/AuthService')

router.post("/api/login", authenticate, (req, res) => {
    
    return res.status(201).json({
        message: "You are logged in"
    })
})

module.exports = router;