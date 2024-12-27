/* menu dropdown */
const categoryBtn = document.getElementById("category-btn");
const categoryDropdown = document.getElementById("category-dropdown");

categoryBtn.addEventListener("click", () => {
  categoryDropdown.classList.toggle("active");
});

/* dropdown link*/
document.addEventListener("DOMContentLoaded", function () {
  // Toggle dropdown
  const categoryBtn = document.getElementById("category-btn");
  const dropdown = document.getElementById("category-dropdown");

  categoryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("show");
  });

  // Handle kategori link clicks
  const categoryLinks = document.querySelectorAll(".category-link");

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Hide dropdown after click
      dropdown.classList.remove("show");

      // Get target section id
      const targetId = this.getAttribute("href").split("#")[1]; // Ambil ID dari href
      const targetSection = document.querySelector(`#${targetId}`);

      // Scroll to section with smooth behavior
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".menu-bar")) {
      dropdown.classList.remove("show");
    }
  });
});

/* upload file print */
const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // Menyimpan file di folder 'uploads'
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Memberikan nama file yang unik
  },
});

// Filter untuk memastikan hanya gambar yang diupload
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Terima file jika tipe mime adalah gambar
  } else {
    cb(new Error("Only image files are allowed!"), false); // Tolak jika bukan gambar
  }
};
// Set up multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // Batasi ukuran file hingga 20MB
  fileFilter: fileFilter,
});

// EJS setup
app.set("view engine", "ejs");

// Route untuk menampilkan form upload
app.get("/", (req, res) => {
  res.render("print", { fileName: "No Files Selected" }); // Kirim data fileName saat merender halaman pertama kali
});

// Route untuk meng-handle file upload
app.post("/upload", upload.single("uploaded-file"), (req, res) => {
  const fileName = req.file ? req.file.filename : "No Files Selected";
  res.render("print", { fileName: fileName }); // Kirim fileName yang berhasil diupload atau default
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
