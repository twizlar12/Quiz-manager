const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./backend/routes/routes')
const cors = require('cors')

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

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(3000, () => console.log('Server is up and running'))
