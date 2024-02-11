// function onDone(){
//     console.log("it is done");
// }
// // const fs=required('fs');
// // readFile('a.txt',onDone);
// setTimeout(onDone,1000);

// for(let i=0;i<10000;i++){
//     console.log(i);
// }

const fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>{console.log(`err is:  ${err} \n data is:  ${data}`)});
console.log("this function works first");