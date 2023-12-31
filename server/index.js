const express = require("express");
const server = express();
const PORT = 3001;
const router = require("./src/routes/index");
const { conn } = require("./src/DB_connection");

server.listen(PORT, () => {
  console.log("Server raise in port: " + PORT);
  conn.sync({ force: false });
});

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", router);
