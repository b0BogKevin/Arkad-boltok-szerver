import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { adminRoutes } from './routes/admin.js';
import arkadRoutes from './routes/arkad.js';
import __dirname from './util/rootpath.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use("/", arkadRoutes);

app.use((req, res, next) => {
    res.status(404).render('404.ejs');
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));