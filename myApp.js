require('dotenv').config()
let express = require('express');
let app = express();

/**
 * Serve Static Assets
 *
 * To serve static files such as images, CSS files, and JavaScript files,
 * use the express.static built-in middleware function in Express.
 *
*/
app.use("/public", express.static(`${__dirname}/public`))

/**
 * Middleware are functions that intercept route handlers
 * A middleware needs to be mounted using the method app.use(path, middlewareFunction).
 */
// Logger Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})

// Chain Middleware to Create a Time Server
app.get("/now", (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({time: req.time})
})


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({"message": "HELLO JSON"})
  } else {
    res.json({"message": "Hello json"})
  }
})























 module.exports = app;
