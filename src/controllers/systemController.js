import sequelize from '../db.js';
import * as yup from 'yup';
import { System, Element, Question, QuestionElement } from '../models/associations.js';

class SystemController {
    // Views:
    async index(req, res) {
        res.render('index', {
            layout: 'layouts/default',
            bg: 'bg-lime'
        });
    }

    async manage(req, res) {
        const id = req.params.id;
        res.render('manage', {
            layout: 'layouts/default',
            bg: 'bg-primary'
        });
    }

    // Actions:
    async create(req, res) {
        const t = await sequelize.transaction();
        try {
            // Creating or editing system:
            let system = {};
            if (req.body.id !== null) {
                system = await System.findByPk(req.body.id);
                system.title = req.body.title;
                system.description = req.body.description
                system.save({transaction: t});
            } else {
                system = await System.create({
                    title: req.body.title,
                    description: req.body.description
                }, {transaction: t});
            }

            for (const i of req.body.elements) {

                // Creating or editing element:
                let element = {};
                if (i.id !== null) {
                    element = await Element.findByPk(i.id);
                    element.element = i.element;
                    element.save({transaction: t});
                } else {
                    element = await Element.create({
                        element: i.element,
                        systemId: system.id
                    }, { transaction: t });
                }

                for (const j of i.questions) {

                    // Creating or editing question:
                    let question = {};
                    if (j.id !== null) {
                        question = await Question.findByPk(j.id);
                        question.question =  j.question;
                        question.save({ transaction: t });
                    } else {
                        question = await Question.create({
                            question: j.question,
                            systemId: system.id
                        }, { transaction: t });

                        // Creating question element:
                        await QuestionElement.create({
                            elementId: element.id,
                            questionId: question.id
                        }, { transaction: t });
                    }
                }
            }
            await t.commit();

        } catch (err) {
            await t.rollback();
            res.json({ status: true });
        }
        res.json({ status: false });
    }

    async delete(req, res) {

        const id = req.params.id;
        res.json({
            id: id,
            status: true
        });

    }

    async get(req, res) {
        const id = req.params.id;
        if (id !== undefined) {

            // Go to DB and get a single System and your elements
            const system = await System.findOne({
                where: { id: req.params.id },
                include: [{ model: Element, include: [{ model: QuestionElement, include: [{ model: Question }] }] }]
            });

            let obj = {
                id: system.id,
                title: system.title,
                description: system.description,
                elements: []
            };
            for (const i of system.elements) {

                let questions = [];
                for (const j of i.question_elements) {
                    questions.push({
                        id: j.question.id,
                        question: j.question.question
                    });
                }
                obj.elements.push({
                    id: i.id,
                    element: i.element,
                    questions: questions
                });
            }

            res.json(obj);

        } else {

            // Get all systems whitout elements
            const systems = await System.findAll();
            res.json(systems);

        }
    }

    async run(req, res) {
        res.send('system');
    }
}

export { SystemController };