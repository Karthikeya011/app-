import mongoose  from "mongoose";


const noteSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        }
    },{
        timestamps:true // gives createdAt,updatedAt feilds
    }
)

const Note = mongoose.model("Note",noteSchema)
// this basically means create a note model based off the schema

export default Note;