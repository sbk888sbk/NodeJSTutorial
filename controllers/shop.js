const Product = require('../models/product')



exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
    });

    });
};

exports.getProduct = (req, res, next) =>{
    const prodId = req.params.productId;
    console.log(prodId);
    res.redirect('/');
}
exports.getIndex = (req, res, next ) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'All Products',
            path: '/'
    });
    });
}

exports.getCart = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/cart',{
            path: '/cart',
            pageTitle: 'Your Cart',
            prods: products,
        });
    });
}

exports.getOrders = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/orders',{
            path: 'orders',
            pageTitle: 'Your Orders',
            prods: products,
        });
    });
}


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',{
        path : 'checkout',
        pageTitle: 'Checkout'
    });
}

