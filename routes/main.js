const express = require("express");
const router = express.Router();
const WishlistController = require("../controllers/WishlistController");
const HomeController = require("../controllers/HomeController");

router.get("/", HomeController.displayHome);

router.get("/wishlist", WishlistController.displayWishlist);

module.exports = router;
