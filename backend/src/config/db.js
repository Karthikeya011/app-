
import mongoose from  "mongoose"
import dotenv from "dotenv"
dotenv.config()


export const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect to mongo successfully")
    } catch (error) {
        SSconsole.error("ERROR connecting to mongo DB",error)  
        process.exit(1) // it means exit with failure 
    }
} 