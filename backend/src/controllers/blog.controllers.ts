import { Router } from "express";
import { Request , Response } from "express";
import blogModel from "../models/blog.model";


export const createBlog = async (req:Request ,res:Response)=>{
    try{
           console.log("hit create blog")
            const newBlog = await blogModel.create(req.body);
            res.status(201).json(newBlog)
            console.log("")
    }
    catch(error){
        res.status(500).send(error);
    }
    
}

export const getBlog = async (req:Request , res:Response)=>{
    try{
           console.log("hit for get blog")
            const showBlog = await blogModel.find(req.body);
            res.status(201).json(showBlog)
            console.log("")
    }
    catch(error){
        res.status(500).send(error);
    }
    
}


export const updatBlog = async (req:Request , res:Response)=>{
    try{
           console.log("hit for updat blog")
            const updatBlog = await blogModel.findByIdAndUpdate(req.body);
            res.status(201).json(updatBlog)
            console.log("")
    }
    catch(error){
        res.status(500).send(error);
    }
    
}


export const deleteBlog = async (req:Request , res:Response)=>{
    try{
           console.log("hit for Delet blog")
            const deletBlog = await blogModel.findByIdAndDelete(req.body);
            res.status(201).json(deleteBlog)
            console.log("")
    }
    catch(error){
        res.status(500).send(error);
    }
    
}
   
          

