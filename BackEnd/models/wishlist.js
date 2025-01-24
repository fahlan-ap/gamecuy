import { DataTypes } from "sequelize";
import db from "../config/database.js";
import Game from "./game.js";  // Import Game model
import User from "./user.js";  // Import User model

const Wishlist = db.define("wishlist", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  gameId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Game,
      key: "id",
    },
  },
}, { timestamps: false });

// Definisikan relasi setelah model didefinisikan
Game.hasMany(Wishlist, { foreignKey: "gameId" });
Wishlist.belongsTo(Game, { foreignKey: "gameId" });

export default Wishlist;
