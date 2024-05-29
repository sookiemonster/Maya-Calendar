const express = require("express");
const router = express.Router();
const path = require('path');

// Mount user routes
const userRoutes = require("./userRoutes");
router.use("/user", userRoutes);

// Mount calendar routes

const calendarRoutes = require("./calendarRoutes");
router.use("/calendar", calendarRoutes);

// Mount static pages

// -- Landing

router.get("/", (req, res) => {
   res.send("PAGE");
});

module.exports = router;