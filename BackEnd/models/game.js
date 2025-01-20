import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Game = db.define ('game_table', {
    name : DataTypes.STRING,
    cover : DataTypes.STRING,
    desc : DataTypes.STRING,
    price : DataTypes.INTEGER,
},{
    freezeTableName: true,
});

export default Game;

(async() => {
    await Game.sync();
})();