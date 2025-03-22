import User from "../models/User.js";
import imageUrlConverter from "../utils/imageUrlConverter.js";
import { generateToken } from "../utils/token.js";
import dotenv from 'dotenv';
dotenv.config()

const secret = process.env.JWT_SECRET;

export function login(){

}

export async function register(data,imageUrl){
    const isUser = await User.findOne({email:data.email});

    if(isUser){
        throw Error('User with this email already exist!');
    }

    const image = imageUrlConverter(imageUrl);

    

    const user = await User.create({name:data.name,email:data.email,password:data.password,imageUrl:image});


    const token = generateToken(user,secret)

    return {
        name:user.name,
        email:user.email,
        imageUrl:user.imageUrl,
        accessToken:token
    };
}