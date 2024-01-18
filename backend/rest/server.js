import express from "express"
import SqlLite from "./sqlDb.js"
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

let items = []; 

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  items.push(req.body);
  res.status(201).send('Item added');
});

const db = new SqlLite();
db.createTable();
