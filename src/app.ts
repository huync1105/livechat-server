import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 3000;
const url = 'mongodb://localhost:27017';

app.get('/', (req, res) => {
  res.send("hello");
})

const client = new MongoClient(url);
async function main() {
  try {
    await client.connect();
    console.log('Connected to Mongodb!!')
  } catch (err) {
    console.error(err)
  } finally {
    await client.close();
  }
}
main();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})