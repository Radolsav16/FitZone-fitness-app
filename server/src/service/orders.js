
import Order from "../models/Order.js";

export async function createOrder (userId,data) {
    data.userId = userId
    await Order.create(data)
}

export async function getAllOrders() {
   const orders = await Order.find().populate({
    path:'products',
   }).lean();

   return orders
} 

export async function getUserOrder(userId) {
    console.log(userId)
    const orders = await Order.find({userId})
 
    return orders
 } 
    


export async function orderRevenue () {
    const orders = await Order.find().lean();

    const revenue = orders.reduce((total,item)=>{
        return total += item.total;
    },0)

    return revenue
}

export async function ordersCount() {
    return (await Order.find()).length   
}
