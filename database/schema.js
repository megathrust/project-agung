import sequelize from "./connect.js";
import { DataTypes } from "sequelize";

// Contoh model sederhana
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
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
  notelp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  namaBarang: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Kategori = sequelize.define("Kategori", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  namaKategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { sequelize, User, Product, Kategori };
