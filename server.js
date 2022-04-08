const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('Database connected'))

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'WebbiSkools' })
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.listen(3000)
