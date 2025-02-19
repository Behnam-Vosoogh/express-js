const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const AdminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", AdminData.routes);
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // res.status(404).send("<h1>Page not found</h1>");
});
// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });

// const routes = require("./routes");
// console.log(routes.someText);
// const server = http.createServer(app);

app.listen(3000);
