const ProductModel = require("../models/ProductsModel");

class HomeController {
  static displayHome(req, res, next) {
    const scriptJS = [
      "/js/cards.class.js",
      "/js/cookie.class.js",
      "/js/wishlist.class.js",
    ];

    ProductModel.getProducts().then((cardsData) =>
      res.render("index", {
        cards: cardsData,
        scripts: scriptJS,
        hideClose: true,
        title: "Home",
      })
    );
  }
}

module.exports = HomeController;
 