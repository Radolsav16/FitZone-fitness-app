import { Schema , model ,Types } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    name:{
        type:String,
        minLength:3,
    },
    email:{
        type:String,
        minLength:10
    },
    password:{
        type:String,
        minLength:9
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