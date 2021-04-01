import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import { router } from './routes.js';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

// Static files
app.use(express.static('public'));
app.use('/css', express.static(path.resolve() + 'public/css'));
app.use('/js', express.static(path.resolve() + 'public/js'));
app.use('/img', express.static(path.resolve() + 'public/img'));

// View Engine
app.use(expressLayouts);
app.set('views', 'public/views');
app.set('layout', 'layouts/default.ejs');
app.set('view engine', 'ejs');

// Configurations
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`One listening at http://localhost:${port}`));