import mongoose from 'mongoose';
const { Schema } = mongoose;
import bcrypt from "bcryptjs"

const userSchema = new Schema({
  name:{type:String , required:true},
  password:{type:String , required:true},
  email:{type:String , required:true, unique:true},
  credits:{type:Number , default:20}
});


//Hash password before saving
userSchema.pre("save",async function (next) {
    if(!this.isModified("password")){
        return next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

const User = mongoose.model('User', userSchema);

export default User