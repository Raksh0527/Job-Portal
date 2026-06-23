import express, { Router } from "express"
import regRouter from "./routes/regRouter.js";
import jobRouter from "./routes/jobRouter.js"
import connectDB from "./config/db.js";
import cors from "cors";

const app=express(); 

app.use(express.json());
app.use(cors());         // to allow frontend requests

app.use("/api",regRouter,jobRouter);


connectDB().then(()=>{
app.listen(3000, () =>{
    console.log("Server is Running at 3000");
})});