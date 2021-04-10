import sequelize from '../db.js';
import { System, Element, Question, QuestionElement } from '../models/associations.js';
import * as yup from 'yup';

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
        const element = await Element.findByPk(id);
        await element.destroy();
    }
}

export { ElementController };