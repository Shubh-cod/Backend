import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//Configuration
app.use(express.json({limit:"16kb"}))        // To get request from Filling Forms and all
app.use(express.urlencoded({extended:true,limit:'16kb'})) //To get request from URL

app.use(express.static("public")) 

app.use(cookieParser())  //Using cookieparser


export {app}