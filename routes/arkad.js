import path from 'path';
import express from 'express';

import __dirname__ from '../util/rootpath.js';
import {shops} from './admin.js';

const router = express.Router();

router.get('/', function(req, res) {
    res.render('../views/index.ejs'),{
        shops: shops
    }
})

export default router