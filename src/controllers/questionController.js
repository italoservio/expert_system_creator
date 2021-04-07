import sequelize from '../db.js';
import Question from '../models/Question.js';
import * as yup from 'yup';

class QuestionController {
    async getAll(req, res) {
        const arr = await Question.findAll();
        res.json(arr);
    }
    async set(req, res) {

    }
}

export { QuestionController };