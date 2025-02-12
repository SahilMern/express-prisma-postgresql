const express = require("express");
const router = express.Router();

// Import user routes
const userRoutes = require("./user.routes");

router.use("/api/users", userRoutes);

module.exports = router;
