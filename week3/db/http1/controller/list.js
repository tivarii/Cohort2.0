const { model } = require("mongoose");

const {animeList}=require("../models/anime");

const listController=async (req,res)=>{
    try{
        const {animeName}=req.body;
        const response=await animeList.create({animeName});
        res.status(200).json({
            msg:"added succesfully",
            data: response,
            success: true
        })
    }
    catch(err){
        console.log(err);
        res.status(411).send("Internal error");
    }
}

module.exports={listController};