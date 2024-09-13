const express = require('express');
const { generateToken } = require('../Services/AuthService');
const router = express.Router();

router.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    //console.log(req.body);
    if (email === "imad" && password === "123") {
        const payload = {
            userId: 1
        }
        const token = generateToken(payload);
        return res.status(200).json({
            token: token,
            name: "admin"
        });
    }
    return res.status(401).json({
        message: "invalid username or password"
    });
});

module.exports = router;
