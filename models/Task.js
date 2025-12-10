import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title : {type : String , required:true},
    description: String,
    done : {type : Boolean , default: false}
})

export const TaskModel = mongoose.model("Task" , TaskSchema)