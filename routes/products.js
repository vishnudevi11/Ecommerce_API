const express = require('express'); //express
const router = express.Router();//router

// initialize products controller
const productsController = require('../controller/products_controller');

// to get the products
router.get('/', productsController.products);

// to create a products
router.post('/create', productsController.create);

// to delete a product using it's required ID
router.delete('/:productID', productsController.delete);

// to update the quantity of a product
router.post('/:productID/update_quantity/', productsController.updateQunatity);

module.exports = router;