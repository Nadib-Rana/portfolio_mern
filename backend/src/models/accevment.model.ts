import { Schema , model } from "mongoose";
import { IAccevment } from "../interfaces/accevment.interface";

const accevmentSchema = new Schema<IAccevment>({
    image : {
        type: String,
        required : true
    },
    description : {
     type : String,
     require : true
    },
    title : {
        type : String,
        required : true
    }

})
const AccevmentModel = model <IAccevment>("Acevment",accevmentSchema);
export default AccevmentModel ;
