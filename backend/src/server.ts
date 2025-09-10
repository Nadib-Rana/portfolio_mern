import app from './app';
import admin from './admin'
import connectDatabase from './config/db';

const { serverPort  } = require('./secret');



// Start server and connect to database
app.listen(Number(serverPort), async () => {
  console.log(`Server Running at http://localhost:${serverPort}`);
  await connectDatabase();
});



