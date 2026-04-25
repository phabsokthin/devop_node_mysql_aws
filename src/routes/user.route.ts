import express from "express";
import { getAllUsers } from "../controllers/users.controller";
const userRoute = express.Router();

userRoute.get("/getAll", getAllUsers);

export default userRoute;