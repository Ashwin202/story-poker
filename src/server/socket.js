const { Server } = require("socket.io");
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const hostname = "localhost";
const port = 4000;

app.prepare().then(() => {
   const server = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
   });
   const io = new Server(server, {});

   io.on("connection", (socket) => {
      console.log("Client connected");

      socket.on("send-message", (message) => {
         console.log("Received message:", message);
      });

      socket.on("disconnect", () => {
         console.log("Client disconnected");
      });
   });

   server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://${hostname}:${port}`);
   });
});
