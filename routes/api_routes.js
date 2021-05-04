const api = require('express').Router();
const post = require('../modules/dataGenerate')
const map = require('../models/dataMapping');
const { request } = require('express');

api.route('/product')
    .get(function (req, res) {
    })
    .post(function (req, res) {
    })

api.route('/customer')
    .get(function (req, res) {
    
    })
    .post(function (req, res) {
        var request = req.body;
        async function createNewCustomer(request) {
            var custCreate = await post.createCustomer(request)
            return custCreate;
        }
        createNewCustomer(request).then(function (customerData) {
            res.send(customerData) // returns the customer JSON
        }).catch(function (err) {
            res.send(err)
        })
    })

api.route('/order')
    .get(function (req, res) {
    })
    .post(function (req, res) {
    })


module.exports = api;