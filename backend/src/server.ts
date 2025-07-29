import app from './app';
import cors from 'cors';
import connectDatabase from './config/db';

const { serverPort } = require('./secret');

// Apply CORS middleware
app.use(cors());

// Start server and connect to database
app.listen(Number(serverPort), async () => {
  console.log(`Server Running at http://localhost:${serverPort}`);
  await connectDatabase();
});