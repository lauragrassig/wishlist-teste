class Wishlist {
  static toggleItensWishlist(id) {
    let itensFromWishlist = Cookies.get("wishlist");

    if (itensFromWishlist) {
      itensFromWishlist = JSON.parse(itensFromWishlist);

      const index = itensFromWishlist.indexOf(id);
      if (index > -1) {
        itensFromWishlist.splice(index, 1);
      } else {
        itensFromWishlist.push(id);
      }

      Cookies.set("wishlist", JSON.stringify(itensFromWishlist), 30);
    } else {
      Cookies.set("wishlist", "[" + id + "]", 30);
    }
  }

  static loadWishlist() {
    let itensFromWishlist = Cookies.get("wishlist");
    if (itensFromWishlist) {
      itensFromWishlist = JSON.parse(itensFromWishlist);

      let inputs = document.getElementsByClassName(
        "cards-list__item--like-input"
      );

      for (let index = 0; index < inputs.length; index++) {
        const id = itensFromWishlist.indexOf(parseInt(inputs[index].id));
        if (id > -1) {
          inputs[index].checked = true;
        }
      }
    }
  }

  static removeFromWishlist(id) {
    let itensFromWishlist = Cookies.get("wishlist");
    itensFromWishlist = JSON.parse(itensFromWishlist);

    const index = itensFromWishlist.indexOf(id);

    if (index > -1) {
      itensFromWishlist.splice(index, 1);
    }

    Cookies.set("wishlist", JSON.stringify(itensFromWishlist), 30);

    document.getElementById("card-" + id).remove();
  }
}

Wishlist.loadWishlist();
