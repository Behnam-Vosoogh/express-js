const path = require("path");
const express = require("express");
const router = express.Router();
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  // res.sendFile("shop.html", { root: "views" });
});
module.exports = router;
