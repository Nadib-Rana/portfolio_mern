import app from './app';
import cors from "cors"
import connectDatabase from './config/db';

const { serverPort } = require('./secret');

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));


app.listen(Number(serverPort), async () => {
    console.log(`Server Running at http://localhost:${serverPort}`);
    await connectDatabase()
});



