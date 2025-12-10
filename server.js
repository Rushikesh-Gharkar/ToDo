import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'

dotenv.config();
connectDB()


const app = express()
app.use(express.json())
app.get("/" , (req , res)=>{
    res.send("Hello")
})

app.listen(process.env.Port || 3000 , ()=>{
    console.log('Express connected');
    
})