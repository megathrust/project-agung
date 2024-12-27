import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import { syncDatabase } from "./database/syncdatabase.js";

const app = express();

app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.use(express.static("public"));

/* panggil tiap file baru */

app.get("/", async (req, res) => {
  res.render("index", {
    title: "Dashboard",
    layout: "components/main",
  });
});

app.get("/product", async (req, res) => {
  res.render("product", {
    title: "Product",
    layout: "components/main",
  });
});

app.get("/print", async (req, res) => {
  res.render("print", {
    title: "Print",
    layout: "components/main",
  });
});

app.get("/contact", async (req, res) => {
  res.render("contact", {
    title: "Contact",
    layout: "components/main",
  });
});

//syncDatabase();
app.listen(3000, (async) => {
  console.log("http://localhost:3000");
});
