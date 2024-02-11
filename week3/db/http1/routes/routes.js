const express=require("express");
const route=express.Router();
const {listController}=require("../controller/list");

route.post("/addAnime",listController);
module.exports=route;