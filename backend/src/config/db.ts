
import mongoose, { ConnectOptions } from "mongoose";

const { mongodbUrl } = require("../secret")

const connectDatabase = async (options: ConnectOptions = {}): Promise<void> => {
    try {
        await mongoose.connect(mongodbUrl as string, options);
        console.log('Connection to database is successfully established');

        mongoose.connection.on('error', (error: Error) => {
            console.error("Database connection error: ", error)
        })
    } catch (error: any) {
        console.error("Could not connect to database : ", error.toString())
    }
}

export default connectDatabase;