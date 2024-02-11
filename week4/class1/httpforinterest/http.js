const express=require("express");
const cors=require("cors");
const app=express();
app.listen(3000);
app.use(express.json());
app.use(cors());
app.get("/interest",(req,res)=>{
    const p=parseInt(req.query.p);
    const r=parseInt(req.query.r);
    const t=parseInt(req.query.t);
    const si=(p*r*t)/100;
    res.send(si.toString());

})
app.get("/",(req,res)=>{
    res.send("<h1>homepage</h1>");
})
app.use((err,req,res,next)=>{
    res.send("some error happen");
})