import Sequelize from "sequelize"

class dbModels {

    constructor() {
        this.User = {}
        this.sequelize = {}
    }

     createModel = async () =>{
        console.log("Start creating models...")

        this.sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: './mydatabase.db'
        });
        
         this.User = this.sequelize.define('user', {
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });
        
        this.SocialEvent = this.sequelize.define('socialEvent', {
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT
            },
            eventDate: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
        await this.User.hasMany(this.SocialEvent);
        await this.SocialEvent.belongsTo(this.User)
        this.sync()
    }

    sync = async()=>{
        await this.sequelize.sync({force:true}).then(() => {
            console.log("Tables created!");
        });
    }

     syncForce = async()=>{
        await this.sequelize.sync().then(() => {
            console.log("Tables created!");
        });
    }

    insertUser = async (name,email)=> {
        try {
            return await this.User.create({ name, email });
        } catch (e) {
            console.log("Error adding user: ", e)
        }
    }

    insertEvent = async (title, description, eventDate, userId) => {
        try {
            return await this.SocialEvent.create({ title, description, eventDate, userId });            
        } catch (error) {
            console.log("Error adding social event: ", e)
        }
    }

    getAllUsers = async () => {
        try {
            return await this.User.findAll();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    };

    getAllEvents = async () => {
        try {
            return await this.SocialEvent.findAll();
        } catch (error) {
            console.error("Error fetching events:", error);
            throw error;
        }
    };

}

export default dbModels;
