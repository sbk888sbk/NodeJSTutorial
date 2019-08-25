const Product = require('../models/product')
const cart = require('../models/cart')


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
    Product.findById(prodId, product => {
        res.render('shop/product-detail',{
            product: product, 
            pageTitle: product.title,
            path : '/products'
    });

    })
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

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
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

