const express = require("express");
const router = express.Router();

// Import user routes
const userRoutes = require("./user.routes");
const postRoutes = require("./post.routes");

router.use("/api/users", userRoutes);
router.use("/api/post",postRoutes )
module.exports = router;
