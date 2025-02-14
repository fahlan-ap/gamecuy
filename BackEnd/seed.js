import bcrypt from "bcrypt";
import Role from "./models/role.js";
import User from "./models/user.js";

(async () => {
  try {
    // Mencari atau membuat role 'admin' dan 'client'
    const [adminRole, clientRole] = await Promise.all([
      Role.findOrCreate({ where: { name: "admin" } }),
      Role.findOrCreate({ where: { name: "client" } }),
    ]);

    // Hash password untuk admin dan client
    const adminPassword = await bcrypt.hash("6570852", 10);
    const clientPassword = await bcrypt.hash("1100303", 10);

    // Menambahkan user 'admin'
    await User.findOrCreate({
      where: { email: "admin@gmail.com" },
      defaults: {
        username: "admin",
        password: adminPassword,
        role_id: adminRole[0].id,
      },
    });

    // Menambahkan user 'client'
    await User.findOrCreate({
      where: { email: "client@gmail.com" },
      defaults: {
        username: "client",
        password: clientPassword,
        role_id: clientRole[0].id,
      },
    });

    console.log("Initial data inserted successfully.");
  } catch (error) {
    console.error("Failed to insert initial data:", error);
  }
})();
