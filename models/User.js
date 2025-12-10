import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email : {type:String , required:true , unique:true},
    firstname : {type:String , required:true},
    lastname : String
})

export const UserModel = mongoose.model("Users" , UserSchema)