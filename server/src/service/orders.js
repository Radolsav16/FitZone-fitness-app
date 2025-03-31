import Order from "../models/Order.js";

export async function createOrder (userId,data) {
    data.userId = userId
    await Order.create(data)
}