import sequelize from '../db.js';
import Pergunta from '../models/Pergunta.js';
import * as yup from 'yup';

class PerguntaController {
    async index(req, res) {
        res.send('Pergunta');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
}

export default PerguntaController;