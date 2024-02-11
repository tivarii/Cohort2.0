//filters 

//filter is used to apply some operation on array and return a new array

//question1: Given a array, return a array with value as (val*2)

const arr=[45,15,162,18,49,172,4853];

const ans=arr.map((i)=>{
    return i*2;
})

console.log(ans);

//now its the time for filter
//Question: You are given a array return a array with all even integer in it using filter
const newans=arr.filter((n)=>{return n%2==0;});
console.log(newans);