import Product from "../models/Products.js";

export async function createProduct(data){
    return await Product.create(data)
}

export async function getProducts(startIndex,endIndex,filter){
    if(filter === 'newest'){
        return (await (Product.find().sort({createdAt:-1}).lean())).slice(startIndex,endIndex);
    }else if(filter === 'oldest'){
        return (await (Product.find().sort({createdAt:1}).lean())).slice(startIndex,endIndex);
    }else if(filter === 'A-Z'){
        return (await Product.find().sort({name:1})).slice(startIndex,endIndex)
    }else if(filter === 'Z-A'){
        return (await Product.find().sort({name: -1})).slice(startIndex,endIndex)
    }else if(filter === 'low'){
        return (await Product.find().sort({price: 1})).slice(startIndex,endIndex)
    }else if(filter === 'high'){
        return (await Product.find().sort({price: -1})).slice(startIndex,endIndex)
    }

    if(filter){
    return (await Product.find({category:filter}).lean()).slice(startIndex,endIndex);
    
    }
  
    return (await Product.find().lean()).slice(startIndex,endIndex);
    
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


export async function  mostSellProduct() {
    return  await Product.find().sort({ sells : -1 }).limit(3).lean();   
}