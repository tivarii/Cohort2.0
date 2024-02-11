console.log("hey");
let js=require('js');
js.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(`error is ${err}`);
    }
    else
        console.log(data);
})