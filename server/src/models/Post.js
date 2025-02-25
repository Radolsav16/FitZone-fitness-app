import { Schema , model , Types } from "mongoose";


const postSchema = new Schema({
    title:String,
    category:String,
    description:String,
    author:{
        type:Types.ObjectId,
        ref:'User'
    },
    date:{
        type:Date,
    },
    content:String,
    image:String,
    likes:[],
    comments:[]
})

const Post = model('Post',postSchema);


export default Post;