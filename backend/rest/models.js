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

     syncForce = async()=>{
        await this.sequelize.sync().then(() => {
            console.log("Tables created!");
        });
    }

    insertUser = async (name,email)=>{
        await this.User.create({ name, email });
    }

    insertEvent = async (title, description, eventDate, userId) => {
        await this.SocialEvent.create({ title, description, eventDate, userId });
    }

}

export default dbModels;
