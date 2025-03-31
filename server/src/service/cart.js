import User from "../models/User.js";


export async function addToCart(userId,productId,quantity){


    const user = await User.findById({_id:userId});
    const cart = user.cart;


    const product = cart.find(i => i.productId == productId);

  

    if(product){
        product.quantity += quantity;
        return user.save()
    }

    user.cart.push({productId,quantity})
    

    return  user.save()
}


export async function getCart(userId){
    const user = await User.findById({_id:userId});


   
    if(!user.cart){
        return [];
    }

    return await user.populate('cart').lean()
}