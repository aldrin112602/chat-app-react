require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const PORT = process.env.SERVER_PORT || 5000;
const MYSQL_USERNAME = process.env.MYSQL_USERNAME || "root";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "";
const DATABASE_NAME = process.env.DATABASE_NAME || "react_app_eme";
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: DATABASE_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err.message);
  } else {
    console.log("Connected to MySQL...");
  }
});

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  connection.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Internal Server Error", message: err.message });
      } else {
        res.status(201).json(results);
      }
    }
  );
});

app.post("/api/register", (req, res) => {
  const { username, password, fullname } = req.body;
  connection.query(
    "INSERT INTO users(username, password, fullname) VALUES (?, ?, ?)",
    [username, password, fullname],
    (err, results) => {
      if (err) {
        res
          .status(500)
          .json({ error: "Internal Server Error", message: err.message });
      } else {
        res.status(201).json(results);
      }
    }
  )
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
