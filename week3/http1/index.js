const express = require("express");
const app=express();
const zod=require("zod");
app.listen(3000);

app.get("/",(req,res)=>{
    res.send("server is working");
    return;
})
// app.get("/health-checkup",function(req,res) {
//     const kidneyId=req.query.kidneyId;
//     const username=req.headers.username;
//     const password=req.headers.password;
//     if((username != "adarsh" && password != "adarsh@54321")){
//         res.status(403).json({
//             msg: "User does not exist"
//         });
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg:"Invalid input"
//         });
//         return ;
//     }

//     res.send("Your heart is healthy");

// })
// function usernmiddleware(req,res,next){
//     const usern=req.headers.username;
//     const pswrd=req.headers.password;
//     if(usern!="adarsh" || pswrd != "124"){
//         res.status(403).json({msg: "wrong user name or password"});
//         return;
//     }else next();

// }

// function kidneymiddleware(req,res,next){
//     const kidneyId=req.query.kidneyId;
//     if(kidneyId != 1 && kidneyId !=2){
//         res.status(411).json({msg: "invalid input"});
//         return;
//     }else next();

// }

// app.get("/health_checkup",usernmiddleware,kidneymiddleware,(req,res)=>{
//     res.send("Your health is fine");
// })

//What is the need to check the input.
app.use(express.json());
//making a schema to check our input
const schema = zod.array(zod.number());
app.post("/health-checkup",(req,res)=>{
    const kidneys=req.body.kidneys;
    // const kidneyLenght=kidneys.length;
    const respond=schema.safeParse(kidneys);
    res.send(respond);

});


//global catch
app.use(function (err,req,res,next){
    res.send("Some internal error");
})