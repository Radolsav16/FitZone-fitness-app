import Challange from "../models/Challanges.js";

export async function createChallange(data){
    return await Challange.create(data)
}

export async function getAllChallanges(){
    return await Challange.find().lean();
}

export async function getChallange(_id){
    return await Challange.findById({_id}).lean();
}

export async function editChallange(_id,data) {
    return await Challange.findByIdAndUpdate(_id,data)
}


export async  function deleteChallange(_id){
    return await Challange.findByIdAndDelete(_id);
}