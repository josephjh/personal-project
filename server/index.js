require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const uctrl = require('./user_controller');
const pctrl = require('./product_controller');
const cctrl = require('./cartController')

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

app.get('/api/session', uctrl.session)
app.delete('/api/session', uctrl.logout)
app.post('/api/login', uctrl.login)
app.post('/api/register', uctrl.register)

app.get('/api/products', pctrl.getProducts)
app.get('/api/myStore', pctrl.getMyStore)
app.post('/api/product', pctrl.addProduct)
app.delete('/api/products/:id', pctrl.deleteProduct)
app.put('/api/products/:id', pctrl.updateProduct)

app.get('/api/cart', cctrl.getCart)