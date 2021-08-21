const ProductModel = require("../models/ProductsModel");

class WishlistController {
  static displayWishlist(req, res, next) {
    const scriptJS = [
      "/js/cards.class.js",
      "/js/cookie.class.js",
      "/js/wishlist.class.js",
    ];

    ProductModel.getProducts().then((cardsData) => {
			let cookiesWishlist = [];

			if (req.cookies.wishlist) {
				cookiesWishlist = JSON.parse(req.cookies.wishlist);
			}

      let itemWishlist = [];
      cardsData.forEach((el) => {
        cookiesWishlist.forEach((id) => {
          if (el.id == id) {
            itemWishlist.push(el);
          }
        });
      });

      res.render("index", {
        scripts: scriptJS,
        hideHeart: true,
        title: "Lista de desejos",
        breadcrumbs: [{ name: "Lista de desejos" }],
        loading: false,
        cards: itemWishlist,
      });
    });
  }
}

module.exports = WishlistController;
