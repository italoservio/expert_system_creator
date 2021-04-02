import sequelize from '../db.js';
import Question from '../models/Question.js';
import * as yup from 'yup';

class QuestionController {
    async index(req, res) {
        res.send('Question');
        // res.render('index', {
        //     layout: 'layouts/default',
        //     title: 'Home page'
        // });
    }
    async getAll(req, res) {
        const arr = await Question.findAll();
        res.json(arr);
    }
}

export default QuestionController;