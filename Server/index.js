import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express()
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(5000,(req,res)=>{
    console.log("server running on port 5000")
})