import connectDB from "@/lib/db"
import { User } from "@/models/user"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
// import jwt from "jsonwebtoken"
const jwt = require('jsonwebtoken');

export async function POST(req:Request){
    try {

        const {email,password} = await req.json()
        await connectDB()

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message: "invalid credentials"} , {status : 401});

        }

        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch){
            return NextResponse.json({message:"invalid credentials"} , {status : 401});
        }
        const token = jwt.sign(
            { userId: user._id, email: user.email},
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        )

        const response = NextResponse.json({message:"Login success"})
        response.cookies.set("token" , token,{
            httpOnly: true,
            path:"/",
            secure:process.env.NODE_ENV === "production",
            maxAge:  60 * 60 * 24 * 7,
        })
        
        return response;


    } catch (error) {
        console.error("Login Error" , error);
        return NextResponse.json({message:"internal server error"}, {status:500})
    }
}