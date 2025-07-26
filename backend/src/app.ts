import express, {Request, Response} from 'express';

import skillRouter from './routes/skillRoutes';
import projectRouter from './routes/projectRouters';
import blogRouter from './routes/blogRouters';
import testimonialRoute from './routes/testimonial.route';


const app = express();
app.use(express.json());

app.use("/api/skills", skillRouter);
app.use("/api/project",projectRouter);
// app.use("/api/contract,");
app.use("/api/blog", blogRouter);
// app.use("/testimonial",testimonialRoute);
// app.use("/api/boi",);





export default app;