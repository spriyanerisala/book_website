import express from 'express'
import { getAllBooks,addBook,updateBook,deleteBook, addOrUpdateReview, deleteReview, getAllReviewsForBook } from '../controllers/bookController.js'
import { isAdmin, verifyToken } from '../middleware/auth.js'



const bookRouter = express.Router()

bookRouter.get('/all-books',getAllBooks)
bookRouter.post('/add',verifyToken,isAdmin,addBook)
bookRouter.put('/update/:id',verifyToken,isAdmin,updateBook)
bookRouter.delete('/delete/:id',verifyToken,isAdmin,deleteBook)
bookRouter.post('/review/:id',verifyToken,addOrUpdateReview)
bookRouter.delete('/review/:id',verifyToken,deleteReview)
bookRouter.get('/:id/reviews',getAllReviewsForBook)

export default bookRouter