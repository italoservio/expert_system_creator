import sequelize from '../db.js';
import Elemento from '../models/Elemento.js';
import * as yup from 'yup';

class ElementoController {
    async index(req, res) {
        res.send('PerguntaElemento');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
}

export default ElementoController;