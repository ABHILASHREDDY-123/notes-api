const express = require("express");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const noteRouter = require("./Routers/noteRouter");
const authRouter = require("./Routers/AuthRouter");

const app = express();
const PORT = 8100;
const MONGOURL = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOURL)
.then(()=>{console.log("Database connected")})
.catch((err)=>{console.log(err);})

app.use(express.json());
app.use(cookieParser()); 
app.use(morgan('tiny'));
app.use("/api/notes",noteRouter)
app.use("/api/auth",authRouter);

app.listen(PORT,()=>{
    console.log("Server has started");
})
