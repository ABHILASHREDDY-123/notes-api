const express = require("express");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const {userValidator} = require("../Validators/customValidators");
const Users = require("../Schemas/userSchema");
const JWTSECRETKEY = "12892198ABHI"
authRouter.post("/signup",userValidator,async (req,res)=>{
        const user = await Users.findOne({username:req.body.username});
        if(user){
            res.send({error:"username already used!"})
        }
        else {
            const user = new Users(req.body);
            try {
              await user.save();
              res.send({message:"User successfully created"});
            }
            catch(error){
                res.send({error});
            }
        }
})

authRouter.post("/signin",userValidator,async (req,res)=>{
         const username = req.body.username;
         const password = req.body.password;
         const user = await Users.findOne({username,password});
         if(!user){
            res.send({message:"Incorrect credentials"});
         } 
         else {
            const userObject = {
                username,
                password,
                _id : user._id.toString()
            }
            const token = jwt.sign(userObject,JWTSECRETKEY);
            res.cookie('token', token);
            res.send({message:"Login Successful"});
         }
})

module.exports = authRouter;