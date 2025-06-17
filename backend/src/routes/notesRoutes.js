import express from "express"
import { getAllNotes,createNotes,updateNote,deleteNote,getNoteByID } from "../controllers/notesControllers.js"


const router = express.Router()

router.get("/",getAllNotes) 
router.get("/:id",getNoteByID) 
// this above is a controller

router.post("/",createNotes)


router.put("/:id",updateNote)

 
router.delete("/:id",deleteNote)

export default router


