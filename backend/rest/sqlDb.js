import sqlite3 from 'sqlite3';

class SqlLite {
    constructor() {
        this.db = new sqlite3.Database('./mydatabase.db', (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the SQLite database.');
        });
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE
            )
        `;

        this.db.run(sql, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Table created');
            }
        });
    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Close the database connection.');
        });
    }
}

export default SqlLite;
