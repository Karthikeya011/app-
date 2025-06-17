import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import path from "path"

import cors from 'cors'
import dotenv from "dotenv"
dotenv.config()



const app = express()  

const __dirname = path.resolve();


if(process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin:"http://localhost:5173"
        }))

}


app.use(express.json())
const port = process.env.PORT || 5001



// this middleware will parse the json bodies
// above is a middleware

app.use("/api/notes",notesRoutes)


if(process.env.NODE_ENV==="production"){

    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
    })


}

// out custom middleware
// app.use((req,res,next)=>{
//     console.log(`our method is ${req.method} & our url is ${req.url}`)
//     next()
//     // for every request this will be activated and next will be called in
//     // the very next part
// })

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log("server running on ",port)
    })

})

// middleware




// endpoint : URL + HTTP method 
// that lets the client interact wiht a specific resource





