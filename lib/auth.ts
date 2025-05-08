
import connectDB from "./db"
import { User } from "@/models/user";
const jwt = require("jsonwebtoken");



export async function getUserFromToken(token: string){
    try {

        const decoded = jwt.verify(token , process.env.JWT_SECRET!) as { userId : string}

        await connectDB()

        const user = await User.findById(decoded.userId).select("-password");
        return user
        
    } catch (error) {
        console.error("JWT Decode Error" , error);
        return null
    }
}