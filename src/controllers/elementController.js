import sequelize from '../db.js';
import Element from '../models/Element.js';
import * as yup from 'yup';

class ElementController {
    async index(req, res) {
        res.render('element', {
            layout: 'layouts/default',
            bg: 'bg-light-brown'
        });
    }
}

export { ElementController };