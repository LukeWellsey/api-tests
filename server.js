const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Luke's backend application");
});

app.get("/luke",(req,res)=>{
    res.send("Hello Luke!");
});

app.listen(3000,()=>{
    console.log("listening");
});