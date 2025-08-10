import { Document } from "mongoose";

export interface IBio extends Document{
   name: string;   
   description : string;    
   title : string;
   socialMediaIcone : string;   
   socialMediaLink : string;  
   profilePhoto : string;                         
   position?: string;   
}