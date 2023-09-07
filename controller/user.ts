import { Request, Response } from "express";

const User = require('../model/user');

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.json(err);
  }
};