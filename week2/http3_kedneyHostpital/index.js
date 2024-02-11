const express=require('express');
const app=new express();
app.use(express.json());
const user={
    name:"Adarsh",
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }
    ]
}
users=[user];

app.get('/',(req,res)=>{
    let userKidney=users[0].kidneys;
    let numberOfKidneys=users[0].kidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<userKidney.length;i++){
        if(userKidney[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        Total_Number_Of_kidneys:numberOfKidneys,
        Number_Of_Healthy_Kidneys:numberOfHealthyKidneys,
        Number_Of_Unhealthy_Kidneys:numberOfUnhealthyKidneys
    });
})

app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({
        msg:"Done"
    });
})

app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete('/',(req,res)=>{
    let unHealthy=0;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[0].healthy){
            unHealthy=unHealthy+1;
        }
    }
    if(unHealthy<=0) res.status(411).json({msg:"You have no bad kidneys"});
    let newK=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newK.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newK;
    res.json({msg:"Done"});
})

app.listen(3001);