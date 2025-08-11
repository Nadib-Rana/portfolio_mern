import express, {Request, Response} from 'express';
import cors from 'cors';

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
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());

app.use("/api/skills", skillRouter);
app.use("/api/project",projectRouter);
app.use("/api/contracts", contractRoutes);
app.use("/api/blog", blogRouter);
app.use("/api/testimonial",testimonialRoute);
app.use("/api/bio", bioRoutes);
app.use("/api/ai-chat", aiChatRoutes);
app.use("/api/edu", eduRoutes);
app.use("/api/expertise",experticeRouter );
app.use("/api/accevment", accevmentRouter)



export default app;