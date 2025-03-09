import Comment from "../models/Comments.js";

export async function createComment(userId,postId,comment){
    return await Comment.create(userId,postId,comment);
}

export async function getAllComments(){
    return await Comment.find().lean();
}
