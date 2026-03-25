import express from "express" ; 
import mongoose from "mongoose" ;
import jwt from "jsonwebtoken" ;
import { UserModel } from "./database/db.js";

const app = express() ;
app.use(express.json())

app.post("/api/v1/signup" ,async (req , res) => {
    // add zod validation and hashing the password
    const username = req.body.username ;
    const password = req.body.password ;

    try {
        await UserModel.create({
        username : username ,
        password : password 
    })

    res.json({
        message : "User signed up..!"
    })
    } catch(e){
        res.status(411).json({
            message : "User Already Exist"
        })
    }
})

app.post("/api/v1/signup" , (req , res) => {

})

app.get("/api/v1/content" , (req, res) => {

})

app.delete("/api/v1/content" , (req,res) => {

})

app.post("/api/v1/brain/share" , (req, res ) => {

})

app.get("/api/v1/brain/:shareLink" , (req, res) => {
    
})

app.listen(3000)