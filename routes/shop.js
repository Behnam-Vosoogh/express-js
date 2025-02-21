const path = require("path");
const express = require("express");
const rootDir = require("../util/path");
const AdminData = require("./admin");

const router = express.Router();
router.get("/", (req, res, next) => {
  console.log("shop.js", AdminData.products);
  res.render("shop");
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  // res.sendFile("shop.html", { root: "views" });
});
module.exports = router;
