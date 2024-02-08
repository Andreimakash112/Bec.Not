const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017'
const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const jwt = require ('jsonwebtoken')
const User = require ('./models/User')
const Product = require ('./models/Product')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/registration', async (req, res) => {
        console.log(req.body)
        const { login, password, email} = req.body
        const user = new User({login, password, email})
       await user.save()
        res.json({
            message: 'Вы успешно зарегистрировались !!!'
        })
    })
    app.post('/login',  (req, res) => {
        console.log(req.body)
        res.json({
            message: 'Вы успешно авторизованы !!!'
        })
    })
    app.get('/products',  (req, res) => {
        const products = [

            {id:1,  header: 'Товар 1', price: 12000 }, 
            {id:2,  header: 'Товар 2', price: 14000 },
            {id:3,  header: 'Товар 3', price: 16000 },  
            {id:4,  header: 'Товар 4', price: 18000 }, 
            {id:5,  header: 'Товар 5', price: 20000 }, 
            {id:6,  header: 'Товар 6', price: 22000 }, 
            {id:7,  header: 'Товар 7', price: 25000 } 
            
          ]
        res.json({
            data: products
        })
    })

const start = async () => {
    try {
        await mongoose.connect(URLDB, { authSource: "admin"})
        app.listen(PORT, () => console.log(`сервер запущен на ${PORT} порте`));
    } catch(e) {
        console.log(e);
    }
}

start()