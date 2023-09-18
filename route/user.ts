import express from "express";
import { addUser, getUsers } from "../controller/user";

const router = express.Router();

router.get('/', getUsers);
router.post('/addUser', addUser);

export default router;
