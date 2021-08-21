const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')
const format = require('format-number');

router.get('/', (req, res, next) => {
    const myFormat = format({decimalsSeparator: '.', decimal: ',', padRight: 2});
    const scriptJS = ['/js/products.js'];

    const mapProducts = ({
        sku,
        price,
        currencyFormat,
        image,
        title,
        }) => ({
        sku,
        price: currencyFormat + ' ' +  myFormat(price),
        image,
        title
    });

    fetch('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
    .then(res => res.json())
    .then(json => res.render('index', {cards: json.products.map(mapProducts), scripts: scriptJS, hideClose: true }))
})

router.get('/wishlist', (req, res, next) => {          
    res.render('index');
})

module.exports = router;