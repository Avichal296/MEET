const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Usermodel } = require("./db");
const jwt = require("jsonwebtoken");
app.json(express.json());
import { secret } from "./config.js";
mongoose.connect("");

app.post("/signup",async (req,res) =>{
 const username = req.body.username;
 const password = req.body.password;
 const email = req.body.email;
  
 const hashpassword = await bcrypt.hash(password,10);
    Usermodel.create({
        username: username,
        password: hashpassword,
        email: email
       })
 res.json({
    message: "Signup successful",
 })
}
)
app.post("/signin", async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
  const user = await Usermodel.findOne({
    username: username,
    id: user._id,
    email:user.email
  })
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if(!isPasswordValid){
    res.send("Invalid username");
  }
  const token = jwt.sign({id: user._id},secret);


    res.json({
        message:"signin successgull",
        token:token
    })
})

app.listen(3000);