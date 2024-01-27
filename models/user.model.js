import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    "name":String,
    "avatar":String,
    "email":String,
    "password":String,
    "created_at":Date
},{versionKey:false}
)

const UserModel = mongoose.models.User||mongoose.model("User",userSchema)

export default UserModel