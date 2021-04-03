import sequelize from '../db.js';
import QuestionElement from '../models/QuestionElement.js';
import * as yup from 'yup';

class QuestionElementController {
    async index(req, res) {
        res.send('QuestionElement');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
}

export { QuestionElementController };