import express, {Request, Response} from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes';
import skillRouter from './routes/skillRoutes';
import projectRouter from './routes/projectRouters';
import blogRouter from './routes/blogRouters';
import testimonialRoute from './routes/testimonial.route';
import contractRoutes from "./routes/contract.routes";
import bioRoutes from "./routes/bioRouters";
import aiChatRoutes from "./routes/aichat.routers";
import eduRoutes from "./routes/eduRouters";
import experticeRouter from './routes/expertice.routes';
import accevmentRouter from './routes/accevmentRouters';




const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use('/admin/api', authRoutes);
app.use("/admin/api/skills", skillRouter);
app.use("/admin/api/project",projectRouter);
app.use("/admin/api/contracts", contractRoutes);
app.use("/admin/api/blog", blogRouter);
app.use("/admin/api/testimonial",testimonialRoute);
app.use("/admin/api/bio", bioRoutes);
app.use("/admin/api/ai-chat", aiChatRoutes);
app.use("/admin/api/edu", eduRoutes);
app.use("/admin/api/expertise",experticeRouter );
app.use("/admin/api/accevment", accevmentRouter)



export default app;