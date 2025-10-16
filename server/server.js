import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRouter from './routes/userRouter.js'
import bookRouter from './routes/bookRouter.js'
dotenv.config()

const app = express()
const port = process.env.PORT

await connectDB()
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL, // or http://localhost:5173 if using Vite
  credentials: true,
  methods:["GET","POST","PUT","DELETE"],
}))


app.get('/',(req,res)=>{
res.send("Book API is working")
})


app.use('/api/user',userRouter)
app.use('/api/books',bookRouter)

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})