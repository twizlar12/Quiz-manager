const { request } = require('express')
const express = require('express')
const router = express.Router()
const registerTemplateCopy = require('../models/signUpModels')

app.post('/register', (req, res) => {
    const registeredUser = new registerTemplateCopy({
        username:req.body.username,
        password:req.body.password,
        role:req.body.role
    })
    registeredUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})

module.exports = router
