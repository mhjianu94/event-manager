import express from "express";
import SqlLite from "./sqlDb.js";
import SqlLdbModels from "./models.js";
import cors from "cors";
import fs from "fs";
import https from 'https';
import { Console } from "console";

const app = express();
const PORT = 8080;
let sqlModels = {}
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, 
}));

const httpsOptions = {
    key: fs.readFileSync('/home/jianu_mh/school/event-manager/backend/keys/key.pem'),
    cert: fs.readFileSync('/home/jianu_mh/school/event-manager/backend/keys/cert.pem')
};

async function setupDatabase() {
    const db = new SqlLite();
    sqlModels = new SqlLdbModels(db);
    await sqlModels.createModel();

    console.log("Database setup complete.");
}

function startServer() {
    https.createServer(httpsOptions, app).listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
}

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    sqlModels.getUser(userId)
    res.json();
});

app.get('/', (req, res) => {
    res.status(200).json("Your server is running..").send('SUCCES');
});

app.post('/user/add',  async(req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = await sqlModels.insertUser(name, email);
        console.log("Succes to add user:", newUser);
        res.status(200).json({ message: "User added successfully", user:newUser });
    } catch (error) {
        console.error("Failed to add user:", error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ message: "Email already exists" });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});

app.post('/event/add', async (req, res) => {
    const {title, description, eventDate, userId} = req.body;
    try { 
        const newEvent = await sqlModels.insertEvent(title, description, eventDate, userId)
        console.log("Succes to add event:", newEvent);
        res.status(200).json({message: "Event added successfully", event:newEvent});
    }catch(e) {
        console.error("Failed to add user:", error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ message: "Event already exists" });
        } else {
            res.status(500).json({ message: "Internal server error" });
        }
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await sqlModels.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch users" });
    }
});

app.get('/events', async (req, res) => {
    try {
        const events = await sqlModels.getAllEvents();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch events" });
    }
});

setupDatabase().then(startServer);
