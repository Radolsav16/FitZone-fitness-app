import { Router } from "express";

const authController = Router();

authController.get('/login',(req,res)=>{
    const data = req.body;
    
    
    
    res.json({
        name:"Radko"
    })
})

authController.post('/register',(req,res)=>{
    const data = req.body;
    
    console.log(data)
    
    
    res.json(data)
})


export default authController;