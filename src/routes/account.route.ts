
import express from "express";
import { getAccount } from "../controllers/account.controller";
const accountRoute = express.Router();

accountRoute.get("/getAll", getAccount);

export default accountRoute;