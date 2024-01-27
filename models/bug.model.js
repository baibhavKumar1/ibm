import mongoose from "mongoose";

const bugSchema= mongoose.Schema({
    "title":String,
    "description":String,
    "source":String,
    severity: {
        type: String,
        enum: ['Critical', 'Major', 'Medium', 'Low'],
      },
      "raised_by": String,
    "created_at":Date,
    "updated_at":Date
},{versionKey:false}
)

const UserModel = mongoose.models.User||mongoose.model("User",userSchema)

export default UserModel