import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import userRouter from '../route/user';
import roomRouter from '../route/room';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb+srv://huync1105:64719199%40huy@cluster0.t2ebu.mongodb.net';
const dbName = 'livechat';

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

// router
app.get('/', (req, res) => {
  res.send("hello");
})
app.use('/user', userRouter);
app.use('/room', roomRouter);

// db connect
const connect = mongoose.connect(`${url}`, { dbName: dbName, });
connect.then(() => console.log("Connected to db!"))

// run server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})