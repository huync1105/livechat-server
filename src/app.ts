import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import userRouter from '../route/user';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';
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

// db connect
mongoose.connect(`${url}`, { dbName: dbName});

// run server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})