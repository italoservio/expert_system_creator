import sequelize from '../db.js';
import { System, Element, Question, QuestionElement } from '../models/associations.js';
import * as yup from 'yup';

class QuestionController {
    // Views
    async getAll(req, res) {
        const arr = await Question.findAll();
        res.json(arr);
    }

    async getSystemQuestions(req, res) {
        const questions = await Question.findAll({
            where: {
                systemId: req.params.systemId
            }
        });
        res.json(questions);
    }

    async set(req, res) {

    }
}

export { QuestionController };