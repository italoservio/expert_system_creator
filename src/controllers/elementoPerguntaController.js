import sequelize from '../db.js';
import PerguntaElemento from '../models/PerguntaElemento.js';
import * as yup from 'yup';

class PerguntaElementoController {
    async index(req, res) {
        res.send('PerguntaElemento');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
}

export default PerguntaElementoController;