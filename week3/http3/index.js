const express=require("express");
const jwt=require("jsonwebtoken");
const z=require("zod");
const jpswrd="456231";

const app=express();
app.use(express.json());
app.listen(3001);

app.get("/",(req,res)=>{
    res.send("server is working");
})
const users=[
    {
        username:"adarsh",
        password:"asdfg"
    },
    {
        username:"harsh",
        password:"123456g"
    },
    {
        username:"shivam",
        password:"okmlpkj"
    },
    
]

function userExist(username,password){
    for(const user of users){
        if(user.username==username && user.password==password){
            return true;
        }
    }
    return false;
}
app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const schema=z.string();
    if(!(schema.safeParse(username).success && schema.safeParse(password).success)){
        res.status(411).send("Invalid email or password");
    }
    else if (userExist(username,password)){
        var token=jwt.sign({username:{username}},jpswrd);
        res.json({
            token
        });
    }
    else{
        res.status(411).send("user does not exist please sign up");
    }

})

app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        const decode=jwt.verify(token,jpswrd);
        const username=decode.username;
        res.json({
            ALLusers: users.filter(function(value){
                return (value.username !== username)
        })
    });
    }
    catch(err){
        res.status(403).send("inavalid token");
    }
})