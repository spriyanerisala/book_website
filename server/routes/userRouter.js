import { register,login, userLikedBooks } from "../controllers/userController.js";
import express from 'express'
import { verifyToken } from "../middleware/auth.js";
const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',login)
userRouter.get('/liked-books',verifyToken,userLikedBooks)

export default userRouter