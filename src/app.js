import express from "express";
import { logger } from "./middleware/logger.middleware.js";
import authRouter from "./routes/auth.routes.js";
import router from "./routes/student.routes.js";
const app= express();

app.use(logger);
app.use(express.json());
app.use("/auth",authRouter);
app.use("/students",router);








export  default app;