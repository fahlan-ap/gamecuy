import db from "./config/database.js";
import "./models/role.js";
import "./models/user.js";
import "./models/game.js";
import "./models/wishlist.js";

(async () => {
  try {
    await db.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Database synchronization failed:", error);
  }
})();
