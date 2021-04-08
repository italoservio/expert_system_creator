import sequelize from '../db.js';
import QuestionElement from '../models/QuestionElement.js';
import * as yup from 'yup';

class QuestionElementController {
    async index(req, res) {
        res.send('QuestionElement');
    }
}

export { QuestionElementController };