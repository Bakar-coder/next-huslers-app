const express = require("express");
const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const port = process.env.PORT || 3000;
const cors = require("cors");

const corsMiddleware  = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("*", (req, res) => handler(req, res));
    server
      .use(cors())
      .use(corsMiddleware)
      .use(handler)
      .listen(port, (err) => {
        if (err) throw err;
        console.log(`> App started on port: ${port} `);
      });
  })
  .catch((ex) => {
    console.error(ex);
    process.exit(1);
  });
