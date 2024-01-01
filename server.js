const express = require("express");
const noteRouter = require("./Routers/noteRouter");
const app = express();
const PORT = 8100;


app.use("/",noteRouter)

app.listen(PORT,()=>{
    console.log("Server has started");
})
