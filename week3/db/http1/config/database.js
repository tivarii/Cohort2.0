const mongoose= require("mongoose");
require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.dbURL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(
        ()=>console.log("db connect succesfully")
        )
    .catch(
        (e)=>{
            console.log(e);
            process.exit(1);
        }
        );
}
module.exports={dbConnect};