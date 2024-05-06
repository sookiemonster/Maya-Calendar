const express = require("express");
const router = express.Router();

// Mount user routes
const userRoutes = require("./userRoutes");
router.use("/user", userRoutes);

// Mount calendar routes

const calendarRoutes = require("./calendarRoutes");
router.use("/calendar", calendarRoutes);

// Mount static pages

// -- Landing

router.get("/", (req, res) => {
   res.send("Home page!")
});

module.exports = router;