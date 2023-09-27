// function to create,add,delete and updates products
const Product = require('../models/product');


// function to show the products
module.exports.products = function(req, res){
    Product.find({}, function(err, foundProducts){
        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(foundProducts));
        }
    });
}

// function to create a product
module.exports.create =function(req, res){
    const newProduct = new Product({
        name: req.body.name,
        quantity: req.body.quantity
    });
    newProduct.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send(JSON.stringify(newProduct));
        }
    });
}

// function is to delete the product and it delete the product using it's required ID
module.exports.delete = function(req, res){
    Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    message: "Product deleted"
                });
            }
        });
}

// function to update a product's quantity
module.exports.updateQunatity =function(req, res){
    const ID = req.params.productID;
    // find the product using id
    Product.findById(ID, function(err, found){
        if(err){
            res.send(err);
        }else{

            // points to note-to add the quantity of the product ,give a positive counts and 
            // to decrease the quantity of the product,give negative counts

            const newQty = parseInt(found.quantity) + parseInt(req.query.number);
            // update the product's quantity
            Product.findByIdAndUpdate(ID, {quantity: newQty}, function(err, updatedProduct){
                if(err){
                    res.send(err);
                }else{
                    updatedProduct.quantity = newQty;
                    res.send({
                        product: updatedProduct,
                        message: ' Product updated successfully'
                    });
                }
            });
        }
    });
}