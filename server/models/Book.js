import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    image:{type:String,default:""},
    title :{type:String,required:true},
    author:{type:String,required:true},
    category:{type:String,required:true},
    description:{type:String,required:true},
    available:{type:Boolean,default:true},
    reviews:[
        {
            userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
            userName : {type:String},
            rating:{type:Number,min:1,max:5},
            comment:{type:String}
        }
    ],
    averageRating:{type:Number},
    

})


const Book = mongoose.model("Book",bookSchema)
export default Book