let express = require('express');
let app = express();

/**
 * Serve Static Assets
 *
 * To serve static files such as images, CSS files, and JavaScript files,
 * use the express.static built-in middleware function in Express.
 *
 * Middleware are functions that intercept route handlers
 * A middleware needs to be mounted using the method app.use(path, middlewareFunction).
 *
*/
app.use("/public", express.static(`${__dirname}/public`))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  res.json({"message": "Hello json"})
})























 module.exports = app;
