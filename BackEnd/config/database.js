import { Sequelize } from "sequelize";

const db = new Sequelize("db_gamecuy", "root", "203795", {
  host: "192.168.142.99",
  dialect: "mysql",
});

export default db;
