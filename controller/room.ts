import { Request, Response } from "express";

const Room = require('../model/room');

export async function addNewRoom(req: Request, res: Response) {
  const { userIds } = req.body;
  try {
    const newRoom = new Room({
      name: 'abc',
      participants: [
        ...userIds
      ],
      messages: []
    });
    const result = newRoom.save();
    res.json(result);
  } catch (err) {
    res.sendStatus(500);
  }
}