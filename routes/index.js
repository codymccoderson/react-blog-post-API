const express = require("express");
  router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Stock Market Crash API").status(200);
});

module.exports = router;
