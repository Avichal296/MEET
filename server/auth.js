const mongoose = require ("mongoose");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const {Usermodel} = require("./db");
const jwt = require("jsonwebtoken");
app.json(express.json());
import { secret } from "../config";

function authMiddleware(req , res, next){
    const authorization = req.headers.authorization;
    if(!authorization){
        res.status(401).json({
            message:unauthorized
        })

    }
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    req.userid = decoded.id;
    if(!decoded){
        res.status(401).json({
            message:"Unauthorized"
        })

    }
}
export default authMiddleware;
