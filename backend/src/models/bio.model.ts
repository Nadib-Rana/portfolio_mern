import { Schema, model } from "mongoose";
import { IBio } from "../interfaces/bio.interface"; // Adjust path as needed

const bioSchema = new Schema<IBio>(
  {
    name: {
       type: String,
       required: true 
      },
    description : {
      type:String,
      required : true
    },
    title : {
      type: String,
      required : true
    },
    socialMediaIcone :{
      type : String
    },
    socialMediaLink :{
      type : String
    },
    position : {
      type : String
    },
  },
);

const BioModel = model<IBio>("Bio", bioSchema);

export default BioModel;