import { Document } from "mongoose";

export interface IAccevment extends Document {
    image : string;
    title : string;
    description : String;

}