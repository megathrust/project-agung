import sequelize from "./connect.js";
import { Kategori, Product, User } from "./schema.js";

export const syncDatabase = async () => {
  try {
    await sequelize.sync();
    await User.sync();
    await Product.sync();
    await Kategori.sync();
    console.log("Database synchronized successfully!");
  } catch (error) {
    console.error("Failed to synchronize database:", error);
    process.exit(1);
  }
};
