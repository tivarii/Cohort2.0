const mongoose=require("mongoose");
const { string } = require("zod");

const animeList=new mongoose.Schema({
    animename: {
        type : String,
        require : true,
        length : 150
    }},
    {
        timestamps:true,
    }
);

const Anime= mongoose.model("Anime",animeList);
module.exports={Anime};