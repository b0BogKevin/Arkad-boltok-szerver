import path from 'path';
import express from 'express';
import __dirname from '../util/rootpath.js';

const router = express.Router();

const shops = [];

router.get('/add-shop', function (req, res) {
    res.render('../views/add-shop.ejs', {

    });
});

router.post('/add-shop', function (req, res) {
    shops.push(
        {
            name : req.body.name,
            description : req.body.description,
            location : req.body.location
        });
    res.redirect('/');
})

export {router as adminRoutes, shops}