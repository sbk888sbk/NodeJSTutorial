const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),'data','cart.json');

module.exports = class Cart{
    static addProduct(prodid, productPrice){
        console.log(prodid)
        //fetch the previous cart
        fs.readFile(p,(err, fileContent) => {
            let cart;
            if(err){
                console.log("create new ")
                //cart has to be created
                cart = {products: [], totalPrice: 0 };
            }
                if(!err){
                    cart = JSON.parse(fileContent);
                }
                //Analyze the cart => Find existing product
                const existingProductIndex = cart.products.findIndex(products => products.id === prodid);
                const existingProduct = cart.products[existingProductIndex];
                
                let updatedProduct;
                //Add new product/ increase quanity
                if(existingProduct){
                    updatedProduct = {...existingProduct };
                    console.log(updatedProduct)
                    updatedProduct.qty = updatedProduct.qty + 1;
                    console.log(updatedProduct)
                    cart.products = [...cart.products];
                    cart.products[existingProductIndex] = updatedProduct;
                } else {
                    updatedProduct = {id:prodid, qty:1};
                    cart.products = [...cart.products, updatedProduct];
                }
      cart.totalPrice = cart.totalPrice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), err => {
        console.log(err);
      });
    });
  }


  static deleteProduct(id,productPrice){
    fs.readFile(p,(err, fileContent) => {
        if(err){
            return;
        }
        const updatedCart = {...cart };
        const product = updatedCart.products.findIndex(prod => prod.id === id);
        const productQty = product.qty;
        updatedCart.products = updatedCart.products.filter(
            prod => prod.id !== id
        );
        updatedCart.totalPrice = cart.totalPrice - productPrice * productQty;
    });
  }

};
