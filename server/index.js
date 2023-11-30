const http = require("http");
const PORT = 3001;
const characters = require("./src/utils/data");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url, id } = req;

  if (url === "/rickandmorty/character/") {
    const id = url.split("/").pop();
    console.log(id);
    const idFound = characters.find((character) => character.id === Number(id));
    res.writeHead(200, { "Content-type": "application/json" });
    return res.end(idFound);
  }
});
server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
