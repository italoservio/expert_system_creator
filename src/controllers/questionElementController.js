import { Sequelize } from '../db.js';
import { Element, Question, QuestionElement } from '../models/associations.js';

class QuestionElementController {

    static organizeData(p_questionElement) {
        const matchedElements = [];
        const matchedQuestions = [];

        for (const i of p_questionElement) {
            matchedElements.push({
                id: i.element.id,
                element: i.element.element
            });
            for (const j of i.element.question_elements) {
                matchedQuestions.push({
                    id: j.question.id,
                    question: j.question.question
                });
            }
        }
        return {
            elements: matchedElements,
            questions: matchedQuestions
        }
    }

    async answer(req, res) {
        var questionElement = [];
        var organizedData = {};

        const sysId = req.query.systemId;
        const questionId = req.query.questionId;
        const answer = (req.query.answer == 'true') ? true : false;

        // Get elements that have the question and all your questions:
        questionElement = await QuestionElement.findAll({
            where: {
                questionId: questionId
            },
            include: [{
                model: Element,
                attributes: ['id', 'element'],
                include: [{
                    model: QuestionElement,
                    attributes: ['questionId', 'elementId'],
                    include: [{
                        model: Question,
                        attributes: ['id', 'question'],
                    }]
                }]
            }]
        });

        organizedData = QuestionElementController.organizeData(questionElement)

        if (answer) {
            res.json(organizedData);
        } else {
            // Get the elements that do not have the question received and all your questions:
            const arrIds = [];
            for (const i of organizedData.elements) {
                arrIds.push(i.id);
            }

            questionElement = await QuestionElement.findAll({
                where: {
                    elementId: { [Sequelize.Op.notIn]: arrIds },
                    systemId: sysId
                },
                include: [{
                    model: Element,
                    attributes: ['id', 'element'],
                    include: [{
                        model: QuestionElement,
                        attributes: ['questionId', 'elementId'],
                        include: [{
                            model: Question,
                            attributes: ['id', 'question'],
                        }]
                    }]
                }]
            });

            organizedData = QuestionElementController.organizeData(questionElement);
            res.json(organizedData);
        }
    }
}

export { QuestionElementController };
