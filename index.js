const express= require('express');
const app= express();


const port= process.env.PORT || 4000;
const cors= require('cors')
const catagories= require("./Data/catagories.json")

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Dragon is cpmming')
})

app.get('/catagories',(req,res)=>{
    res.send(catagories);
})

app.listen(port,()=>{
    console.log(`Running API is running on port : ${port}`);
})