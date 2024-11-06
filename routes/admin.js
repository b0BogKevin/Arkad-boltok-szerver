import path from 'path';
import express from 'express';
import __dirname from '../util/rootpath.js';
import fs from 'fs';

const router = express.Router();
const shopsFilePath = path.join(__dirname, 'public', 'data', 'shops.json');


router.get('/add-shop', function (req, res) {
    res.render('add-shop.ejs', {
        pagetitle: 'add-shop',
        path: '/admin/add-shop'
    });
    
});

router.post('/add-shop', function (req, res) {
    const newShop = {
        name : req.body.name,
        description : req.body.description,
        location : req.body.location
    }
    if (!(newShop.description == ""  || newShop.location ==""|| newShop.name =="")) {
        saveShop(newShop);
    }
    
    res.redirect('/');
})

const saveShop = (shop)=> {
fs.readFile(shopsFilePath, (err,data)=> {
    let shops = []
    if (!err) {
        shops = JSON.parse(data);
    }
    shops.push(shop);
    fs.writeFile(shopsFilePath, JSON.stringify(shops,null,2), (err) => {
        if (err) throw err;
        console.log('Shop saved!');
    });
},
)}

export default router 