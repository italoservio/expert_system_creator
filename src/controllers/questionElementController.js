import sequelize from '../db.js';
import { System, Element, Question, QuestionElement } from '../models/associations.js';
import * as yup from 'yup';

class QuestionElementController {
    async index(req, res) {
        res.send('QuestionElement');
    }
}

export { QuestionElementController };