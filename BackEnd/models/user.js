import { DataTypes } from "sequelize";
import db from "../config/database.js";
import Role from "./role.js";  // Import model Role

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,    // Menunjukkan model Role sebagai referensi
        key: "id",    // Kolom yang digunakan sebagai referensi pada tabel Role
      },
    },
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;
