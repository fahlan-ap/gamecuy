import db from "./config/database.js";
import User from "./models/user.js";
import Role from "./models/role.js";

(async () => {
    try {
      await db.sync({ alter: true });
      console.log("Database synchronized successfully.");
    } catch (error) {
      console.error("Database synchronization failed:", error);
    }
  })();
