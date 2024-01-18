import express from "express";
import SqlLite from "./sqlDb.js";
import SqlLdbModels from "./models.js";

const app = express();
const port = 3000;
const sqlModels = {}
app.use(express.json());

async function setupDatabase() {
    const db = new SqlLite();
    sqlModels = new SqlLdbModels(db);
    await sqlModels.createModel();

    console.log("Database setup complete.");
}

function startServer() {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}


app.get('user/get', (req, res) => {
    res.json(items);
});

app.post('/user/add', (req, res) => {
    const {name, email} = req.body;
    try { 
        sqlModels.insertUser(name,email)
        res.body = {message: "Succes add user"}
        res.status(201).send('User added');
    }catch(e) {
        console.log("Failed to add user")
        res.body = {message: "Failed to add user"}
        res.status(500).send('Failed');
    }
});

setupDatabase().then(startServer);
