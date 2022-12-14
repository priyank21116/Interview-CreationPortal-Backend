const express = require('express')
const router = express.Router()
const colors = require('colors')
const bodyParser = require('body-parser')
const dotenv= require('dotenv').config()
const {errorHandler,invalidPathHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { urlencoded } = require('body-parser')

const cors = require("cors")
const app = express()
 
const port=process.env.PORT || 5000 

connectDB() 
app.use(cors())    

// to access and use api request
app.use(express.json())
app.use(urlencoded({extended:false}))
// app.use(cors({
//    origin: "https://clinquant-fairy-802ced.netlify.app/",
//    methods: ['GET','POST','PUT','DELETE']
// }))    



app.use('/api', require('./routes/interview'))
app.use('/cd', require('./routes/Candidate'))
app.use('/in', require('./routes/Interviewer'))




// app.get('/api',(req,res)=>{})

app.use(errorHandler)
app.use(invalidPathHandler)


app.listen(port,()=>(console.log(`Server is listening for request at ${port}`)))  