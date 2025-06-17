import Note from "../models/Note.js"

export  const  getAllNotes = async(req,res)=>{
    try {
          const notes = await Note.find().sort({createdAt:-1});
          res.status(200).json(notes)
    } catch (error) {
          console.error("Error in getAllNotes controller",error)
          res.status(500).json({message:"Internal server Error"})
    }
 }


export const createNotes = async (req,res)=>{
    try {
     const {title,content} = req.body 
        if (!title || !content) {
      return res.status(400).json({ message: "title and content are required." });
    }
     const newNote = new Note({title,content})
     const savedNote = await newNote.save()
     res.status(201).json({savedNote})
    } catch (error) {
      console.error("Error in createNotes controller \n",error)
     res.status(500).json({message:"Internal server Error"})
    }
 }



 export const updateNote = async (req,res)=>{
      try {
            const {title,content} = req.body
            const updateNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
            if(!updateNote) return res.status(404).json({message:"Note not found"})
            res.status(200).json(updateNote)
      } catch (error) {
            console.error("Error in updateNote controller \n",error)
            res.status(500).json({message:"Internal server Error"})
      }
}


export const deleteNote = async (req,res)=>{
     try {
      const deletedNote =  await Note.findByIdAndDelete(req.params.id)
      if(!deletedNote) return res.status(404).json({message:"Note not found"})
      res.status(200).json({message:"Note deleted successfully"})
     } catch (error) {
       console.error("Error in deleteNote controller \n",error)
       res.status(500).json({message:"Internal server Error"})
     }
}

export const getNoteByID = async(req,res)=>{
      try {
            const note = await Note.findById(req.params.id)
            if(!note)res.status(404).json({message:"note not found"})
            res.json(note)
      } catch (error) {
            
      }
}

/*

      const asyncHandler = (fn) => (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
      };

      wrapper function instead of using try catch block

*/