import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Game = db.define ('games', {
    name : DataTypes.STRING,
    cover : DataTypes.STRING,
    desc : DataTypes.STRING,
    price : DataTypes.INTEGER,
    genre: DataTypes.STRING,
},{
    freezeTableName: true,
});

export default Game;

(async() => {
    await Game.sync();
})();