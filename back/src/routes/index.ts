import { Router } from "express";
import usersRouter from "./userRoutes";
import appointmentRouter from "./appointmentRoutes";

const indexRouter = Router();

indexRouter.use('/users', usersRouter);
indexRouter.use('/appointments', appointmentRouter);

export default indexRouter;