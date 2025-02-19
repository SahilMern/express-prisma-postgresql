const express = require("express");
const router = express.Router();

// Import user routes
const userRoutes = require("./user.routes");
const postRoutes = require("./post.routes");
const commentRoutes = require("./comment.routes");


router.use("/api/users", userRoutes);
router.use("/api/post",postRoutes )
router.use("/api/comment",commentRoutes )

module.exports = router;
