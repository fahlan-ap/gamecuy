import { Sequelize } from "sequelize";

const db = new Sequelize("db_gamecuy", "root", "203795", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
