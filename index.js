const PORT = 9001

const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const jwt = require ('jsonwebtoken')

const app = express()

app.use(cors())
app.use(express.json())

const start = () => {
    try {
        app.listen(PORT, () => console.log(`сервер запущен на ${PORT} порте`));
    } catch(e) {
        console.log(e);
    }
}
