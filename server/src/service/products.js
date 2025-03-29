import Product from "../models/Products.js";

export async function createProduct(data){
    return await Product.create(data)
}

export async function getAllProduct(){
    return await Product.find().lean();
}

export async function getProduct(_id){
    return await Product.findById({_id}).lean();
}

export async function editProduct(_id,data) {
    return await Product.findByIdAndUpdate(_id,data)
}


export async  function deleteProduct(_id){
    return await Product.findByIdAndDelete(_id);
}
