require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session')
const ctrl = require('./controller')

const app = express(),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(bodyParser.json())


massive(CONNECTION_STRING).then(db => {
    app.set('db',db)

    app.listen(`${SERVER_PORT}`, () => console.log(`${SERVER_PORT} is Running`))
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000000000000}
}))

app.get('/api/products', ctrl.getProducts)
app.post('/api/login', ctrl.login)
app.post('/api/register', ctrl.register)