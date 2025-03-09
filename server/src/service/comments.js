import Comment from "../models/Comments.js";

export async function createComment(data){
    return await Comment.create(data);
}

export async function getAllComments(){
    return await Comment.find().lean();
}
