import mongoose, { Document, models, Schema } from "mongoose"



export interface IUser extends Document{
    name : string
    email : string
    password : string
    createdAt: Date
}

const userSchema = new Schema<IUser>({
    name: {type: String , required : true},
    email: {type :String  , required : true , unique : true },
    password: {type: String , required : true },
    createdAt: {type: Date , default : Date.now },

})

export const User = models.User || mongoose.model<IUser>("User" , userSchema)