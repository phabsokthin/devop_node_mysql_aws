import pool from "../config/config";

import { Request, Response } from "express";
import { findAll } from "../repositories/getAllData";
import { User } from "../models/user.model";


const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await findAll<User[]>("users");
    return res.json({
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};


export { getAllUsers };