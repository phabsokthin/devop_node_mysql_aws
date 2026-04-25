import { Request, Response } from "express";
import Account from "../models/account.model";
import { findAll } from "../repositories/getAllData";

const getAccount = async (req: Request, res: Response) => {
  try {
    const account = await findAll<Account[]>("acount");
    return res.json({
      success: true,
      data: account,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

export { getAccount };