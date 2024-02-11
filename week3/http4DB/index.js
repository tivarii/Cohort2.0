const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://adarsh:DCp6Mq7OWH6UPCmi@cluster0.o25mqzc.mongodb.net/");

const Users=mongoose.model('User',{name: String, email: String, password:String});

const user1=new Users({
    name: "Adarsh", email:"agfd", password:"ksdjhfkdsj"
});
user1.save();