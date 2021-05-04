/*======
* 🚨 Functions that post to API and return a response.
* These functions need an await/async function with the POST routes
=======*/

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const Shopify = require('shopify-api-node');
const shopify = new Shopify({
    shopName: process.env.SHOPNAME,
    apiKey: process.env.SHOP_APIKEY,
    password: process.env.SHOP_APIPASS,
    autoLimit: true
});


module.exports = {
    createCustomer(params) {
        return new Promise( (resolve, reject)  => {
            shopify.customer.create(params)
            .then(function (customer) {
                resolve(customer)
            })
            .catch(function (err) {
            var error = err.response.body.errors
                reject(error)
            })
        });
        
    },
    createOrder() { },
    createDraftOrd() { }
}