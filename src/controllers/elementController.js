import { Element, Question, QuestionElement } from '../models/associations.js';

class ElementController {
    // Views
    async index(req, res) {
        res.render('element', {
            layout: 'layouts/default',
            bg: 'bg-light-brown'
        });
    }

    // Actions
    async delete(req, res) {
        const id = req.params.id;
        const questionElement = await QuestionElement.findAll({
            attributes: ['questionId'],
            where: {
                elementId: id
            }
        });

        for (const i of questionElement) {
            const question = await Question.findByPk(i.questionId);
            await question.destroy();
        }

        const element = await Element.findByPk(id);
        await element.destroy();
    }

    async getSystemElements(req, res) {
        const elements = await Element.findAll({
            where: {
                systemId: req.params.systemId
            }
        });
        let arrElements = [];
        for (const i of elements) {
            arrElements.push({
                id: i.id,
                element: i.element,
                points: 0
            });
        }
        res.json(arrElements);
    }
}

export { ElementController };
