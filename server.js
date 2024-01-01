const express = require("express");

const app = express();
const PORT = 8100;


app.use("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log("Server has started");
})
