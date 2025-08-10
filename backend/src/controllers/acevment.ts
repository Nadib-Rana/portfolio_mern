import { Request , Response } from 'express'
import AccevmentModel from '../models/accevment.model'

// Create

export const createAcevment = async (req : Request , res : Response) => {
    try{
        const accevment = new AccevmentModel(req.body);
        console.log(accevment);
        const save = await accevment.save();
        res.status(201).json(save);
    }
    catch(error){
        res.status(500).json({error: error.message});

    }
}

export const getAccevment = async (req: Request , res : Response) =>{
    try{
        const accevment = await AccevmentModel.find();
        res.status(200).json(accevment);
    }
    catch(error){
      res.status(500).json({error: error.message});
    }
}




