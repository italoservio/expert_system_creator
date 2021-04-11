import { Question } from '../models/associations.js';

class QuestionController {
    async getSystemQuestions(req, res) {
        const questions = await Question.findAll({
            where: {
                systemId: req.params.systemId
            }
        });
        res.json(questions);
    }
}

export { QuestionController };
