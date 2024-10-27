import path from 'path';
import express from 'express';
import fs from 'fs';
import __dirname from '../util/rootpath.js';

const router = express.Router();
const shopsFilePath = path.join(__dirname, 'public', 'data', 'shops.json');

router.get('/', function(req, res) {
    getShops((shops) => {
        res.render('index.ejs', {
            shops: shops
        })
    })
    
})

const getShops = (cb) => {
    fs.readFile(shopsFilePath, (err, data) => {
        if (err) {
          cb([])
        } else {
          cb(JSON.parse(data))
        }
      })
    }
export default router