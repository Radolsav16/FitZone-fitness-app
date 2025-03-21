import { Schema , model ,Types } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:4
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    imageUrl:{
        type:String
    }

})

userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10);
})
const User = model('User',userSchema);

export default User;