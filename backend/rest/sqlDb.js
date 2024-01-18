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

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function(err) {
                if (err) {
                    console.error('Error running sql: ' + sql);
                    console.error(err);
                    reject(err);
                } else {
                    resolve({ id: this.lastID });
                }
            });
        });
    }

    async createTables(sqlCommands) {
        for (const sql of sqlCommands) {
            await this.run(sql);
            console.log('Table created');
        }
    }

    close() {
        return new Promise((resolve, reject) => {
            this.db.close((err) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    console.log('Close the database connection.');
                    resolve();
                }
            });
        });
    }
}

export default SqlLite;
