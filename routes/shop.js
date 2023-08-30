const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const bodyParser = require('body-parser');


const router = express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
