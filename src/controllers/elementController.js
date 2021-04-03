import sequelize from '../db.js';
import Element from '../models/Element.js';
import * as yup from 'yup';

class ElementController {
    async index(req, res) {
        res.send('QuestionElement');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
}

export { ElementController };