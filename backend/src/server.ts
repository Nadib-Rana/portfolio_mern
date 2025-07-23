import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import projectRoutes from './routes/projectRoutes';
import skillRoutes from './routes/skillRoutes';
import aboutRoutes from './routes/aboutRoutes';
import contactRoutes from './routes/contactRoutes';
import authRoutes from './routes/authRoutes';
import { authenticateToken } from './middleware/auth';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mern-portfolio', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// Protected Admin Routes
app.use('/api/admin/projects', authenticateToken, projectRoutes);
app.use('/api/admin/skills', authenticateToken, skillRoutes);
app.use('/api/admin/about', authenticateToken, aboutRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('MERN Portfolio Backend');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});