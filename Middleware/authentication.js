const jwt =require('jsonwebtoken')
const UserModel = require('../Model/UserModel')
const blacklist = require('../Model/BlackList')

require('dotenv').config()

const authentication =async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if(blacklist.includes(token)){
            res.send({msg:"got to login again your token expired !!"})
        }
        const decoded= jwt.verify(token,process.env.SECRET_KEY)
        console.log(decoded)
        const {userID}=decoded;
        const userExist = await UserModel.findById(userID)
        if(!userExist){
            res.send({msg:"unathorized banda "})
        }
        req.userExist=userExist
        next()
        
    } catch (error) {
        res.send({msg:error})
    }
}

module.exports=authentication;


