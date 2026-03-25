import dotenv from "dotenv";
dotenv.config();

import express from "express" ; 
import jwt from "jsonwebtoken" ;
import { UserModel, connectDB } from "./database/db.js";

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

app.post("/api/v1/signin" ,async (req , res) => {
    const username = req.body.username ;
    const password = req.body.password ;
    const existingUser = await UserModel.findOne({
        username ,
        password
    })
    if(existingUser){
        const token = jwt.sign({
            id : existingUser._id
        }, process.env.JWT_PASSWORD!)
        res.json({
            token
        })
    } else {
        res.status(401).json({
            message : "Incorrect Credentials"
        })
    }
})

app.get("/api/v1/content" , (req, res) => {

})

app.delete("/api/v1/content" , (req,res) => {

})

app.post("/api/v1/brain/share" , (req, res ) => {

})

app.get("/api/v1/brain/:shareLink" , (req, res) => {
    
})

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    })
})