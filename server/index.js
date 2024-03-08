const http = require("http");
const fs = require("fs");
const path = require("path");

const url = require("url");

const PUBLIC_DIR = path.join(__dirname, "../public");
const PORT = 3000;

const server = (req, res) => {
  // Lokalhost:8000
  if (req.url === "/") {
    res.end("INI HALAMAN SEARCH");
  } else if (req.url === "/search") {
    res.end("ini halaman search");
  } else {
    res.end("gak ada...");
  }
};

http.createServer(server).listen(PORT);
console.log(`Server is running ... PORT : localhost: ${PORT}`);
