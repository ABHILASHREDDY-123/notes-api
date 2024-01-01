const express = require("express");
const mongoose = require("mongoose");
const noteRouter = require("./Routers/noteRouter");

const app = express();
const PORT = 8100;
const MONGOURL = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOURL)
.then(()=>{console.log("Database connected")})
.catch((err)=>{console.log(err);})

app.use(express.json());

app.use("/",noteRouter)

app.listen(PORT,()=>{
    console.log("Server has started");
})
