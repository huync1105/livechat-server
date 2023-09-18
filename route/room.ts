import express from "express";
import { Request, Response } from "express";
import { addNewRoom } from "../controller/room";

const Room = require('../model/room');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const rooms = await Room.find({});
    res.json(rooms);
  } catch (err) {
    res.json(err);
  }
});

router.post('/addRoom', addNewRoom);

export default router
