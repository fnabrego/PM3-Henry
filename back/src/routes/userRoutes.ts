import { Router } from "express";
import { getAllUser, getUserById, login, register } from "../controllers/userController";

const usersRouter = Router();

usersRouter.get("/", getAllUser);
usersRouter.get("/:id", getUserById);
usersRouter.post("/register", register);
usersRouter.post("/login", login);


export default usersRouter;