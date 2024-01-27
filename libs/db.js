import mongoose from "mongoose";

const connectToMongo = async()=>{
    try{
        await mongoose.connect("mongodb+srv://cocc1274:Vaibhav1@cluster0.mybcsrv.mongodb.net/ibm?retryWrites=true&w=majority");
        console.log("Connected")
    }catch(err){
        console.log(err)
    }
} 

export default connectToMongo;