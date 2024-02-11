const express = require('express')
const app = express()
const port = 3000

app.get('/name', (req, res) => {
  res.send('Hello World!')
})
app.get('/',(req,res)=>{
    res.json({
        name:"Adarsh",
        age:30
    })
})

app.post('/conversation',(req,res)=>{
    res.json({
        sum:"2+2=4"
    })
})

app.listen(port)