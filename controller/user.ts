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

export async function addUser(req: Request, res: Response) {
  const {
    first_name,
    last_name,
    user_name,
    pass_word
  } = req.body;
  try {
    const newUser = new User({...req.body});
    if (!first_name || !last_name || !user_name || !pass_word) {
      res.sendStatus(400).json({
        status: 400,
        message: 'Fields required',
        data: null
      })
    } else {
      const result = await newUser.save();
      res.json({
        status: 200,
        message: 'Succesfully!',
        data: result
      })
    }
  } catch (err) {
    res.sendStatus(500);
  }
}