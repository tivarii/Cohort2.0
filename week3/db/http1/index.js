const express=require("express");
const app=express();
const mongoose=require("mongoose");

require("dotenv").config();

const Port=process.env.PORT || 4000;

app.listen(Port,()=>console.log("server started"));

const {route}=require("../http1/routes/routes");
console.log(route);

const {listController}= require(".../http1/controller/list");

app.post(route,listController);

// mongoose.connect("mongodb+srv://adarsh:Adarsh%4054321@cluster0.o25mqzc.mongodb.net/anime")
// const model1=mongoose.model("anime",{
//     animeName: String,
// })
app.get("/",(req,res)=>{
    res.send(`<h1>You are at homepage<\h1>`);
})

console.log(Port);
const dbConnect=require("../http1/config/database");
dbConnect();
