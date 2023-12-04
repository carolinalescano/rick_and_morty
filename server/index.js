const http = require("http");
const PORT = 3001;
const getCharById = require("./src/controllers/getCharById");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { url } = req;

  // if (url.includes(`/rickandmorty/character/`)) {
  //   const idParams = url.split("/").pop();

  //   const idFound = characters.find(
  //     (character) => character.id === Number(idParams)
  //   );
  //   res.writeHead(200, { "Content-type": "application/json" });
  //   return res.end(JSON.stringify(idFound));
  // }

  if (url.includes("/rickandmorty/character/")) {
    const id = res.url.split("/").pop();

    getCharById(res, id);
  }
});
server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
