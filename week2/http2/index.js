const express=require('express');

const app=new express();
app.listen(3001);
function facto(n){
    ans=1;
    for(let i=1;i<=n;i++){
        ans=ans*i;
    }
    return ans;
}

app.get('/fact',(req,res)=>{
    const n=req.query.n;
    const ans=facto(n);
    res.send(`factorial of ${n} is ${ans.toString()}`);
})

app.get('/',(req,res)=>{
    res.send('<b> you are on the website</b>');
})