var fetch = require("node-fetch");
var format = require("format-number");

class ProductModel {
  static getProducts() {
    const priceFormat = format({
      decimalsSeparator: ".",
      decimal: ",",
      padRight: 2,
    });
    
    const mapProducts = ({ sku, price, currencyFormat, image, title }) => ({
      id: sku,
      price: currencyFormat + " " + priceFormat(price),
      image,
      title,
    });

    return fetch("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e")
      .then((res) => res.json())
      .then((json) => {
        return json.products.map(mapProducts);
      });
  }
}

module.exports = ProductModel;
