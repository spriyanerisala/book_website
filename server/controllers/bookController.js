import Book from '../models/Book.js'
import User from '../models/User.js'
export const getAllBooks = async (req,res)=>{
    try{
       const books = await Book.find()
       return res.status(200).json({success:true,message:"All Books",books})
    }catch(err){
       return res.status(500).json({ message: err.message });
    }
}

export const addBook = async (req,res)=>{
    try{
    const {title,author,category,description} = req.body
    const book = await Book.create({title,author,category,description})
    return res.status(200).json({success:true,message:"New Book Added",book})
    }catch(err){
      return res.status(500).json({ message: err.message }); 
    }
}


export const updateBook = async(req,res)=>{
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({success:true,message:"Book Updated Successfully",updatedBook})
        
    }catch(err){
        return res.status(500).json({ message: err.message }); 
    }
}


export const deleteBook = async(req,res)=>{
    try{
   const deletedBook = await Book.findByIdAndDelete(req.params.id)
   return res.status(200).json({success:true,message:"Book Removed Successfully",deletedBook}) 
    }catch(err){
        return res.status(500).json({ message: err.message }); 
    }
    
}




export const addOrUpdateReview = async (req, res) => {
  try {
    console.log('User info:', req.user); // debug
 const userId = req.user._id || req.user.id
    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized: User ID missing' });
    }

    const { rating, comment } = req.body;
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const userIdStr = req.user.id.toString();
    const existingReview = book.reviews.find((r) => {
  if (!r.userId) {
    console.warn('Found review with missing userId:', r);
    return false;
  }
  return r.userId.toString() === userIdStr;
});
    if (existingReview) {
      existingReview.rating = rating;
      existingReview.comment = comment;
    } else {
      book.reviews.push({
        userId: req.user.id,
        userName: req.user.name || 'Anonymous',
        rating,
        comment,
      });
    }

    book.averageRating = book.reviews.reduce((a, r) => a + r.rating, 0) / book.reviews.length;

    await book.save();

    res.status(200).json({ success: true, message: 'Review submitted', book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};



export const deleteReview = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Unauthorized: User ID missing" });
    }

    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    const userIdStr = req.user.id.toString();

    // ✅ SAFELY filter reviews by matching userId
    book.reviews = book.reviews.filter((r) => {
      if (!r.userId) return true; // keep review if no userId
      return r.userId.toString() !== userIdStr;
    });

    // ✅ Recalculate averageRating
    if (book.reviews.length === 0) {
      book.averageRating = 0;
    } else {
      book.averageRating = book.reviews.reduce((sum, r) => sum + r.rating, 0) / book.reviews.length;
    }

    await book.save();

    res.status(200).json({
      success: true,
      message: "Review deleted successfully",
      book,
    });
  } catch (err) {
    console.error("Error in deleteReview:", err);
    res.status(500).json({ message: err.message });
  }
};

export const getAllReviewsForBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('reviews.userId', 'name email'); // optional populate

    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({
      success: true,
      reviews: book.reviews,
      totalReviews: book.reviews.length,
      averageRating: book.averageRating || 0,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const toggleLike = async(req,res)=>{
    try{
    const book=await Book.findById(req.params.id)
    const user = await User.findById(req.user._id)
    if(!book || !user){
        return res.status(404).json({ message: "Book or user not found" });
    }
    const userId = req.user._id
    const alreadyLiked=book.likes.includes(userId)

    if(alreadyLiked){
        //unlike
        book.likes = book.likes.filter(id => id.toString() !== userId.toString())
        user.likedBooks = user.likedBooks.filter(id => id.toString() !== book._id.toString())
    }else{
        //like
        book.likes.push(userId)
        user.likedBooks.push(book._id)
    }

    await book.save()
    await user.save()
    res.status(200).json({
      success: true,
      message: alreadyLiked ? "Book unliked" : "Book liked",
      likesCount: book.likes.length
    });
    
}catch(err){
 return res.status(500).json({ message: err.message });
    }
}