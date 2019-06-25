const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/user')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})

const connection = mongoose.connection;
connection.once('open', ()=> console.log(`MongoDB connection established!`))

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

app.listen(PORT, ()=> console.log(`Server ${PORT}`))

