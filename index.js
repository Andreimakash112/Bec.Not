const PORT = 9001

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const jwt = require ('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/registration',  (req, res) => {
        console.log(req.body)
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

            {id:1,  header: 'Товар 1',image: image, price: 12000 }, 
            {id:2,  header: 'Товар 2',image: image_2, price: 14000 },
            {id:3,  header: 'Товар 3',image: image_3, price: 16000 },  
            {id:4,  header: 'Товар 4',image: image_4, price: 18000 }, 
            {id:5,  header: 'Товар 5',image: image_5, price: 20000 }, 
            {id:6,  header: 'Товар 6',image: image_6, price: 22000 }, 
            {id:7,  header: 'Товар 7',image: image_7, price: 25000 } 
            
          ]
        res.json({
            data: products
        })
    })

const start = () => {
    try {
        app.listen(PORT, () => console.log(`сервер запущен на ${PORT} порте`));
    } catch(e) {
        console.log(e);
    }
}

start()