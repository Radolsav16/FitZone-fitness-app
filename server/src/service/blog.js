import Post from "../models/Post.js";

export async function createPost(data){
    return await Post.create(data)
}

export async function getAllPosts(){
    return await Post.find().lean();
}

export async function getPost(_id){
    return await Post.findById({_id}).lean();
}

export async function editPost(_id,data) {
    return await Post.findByIdAndUpdate(_id,data)
}


export async  function deletePost(_id){
    return await Post.findByIdAndDelete(_id);
}