import sequelize from '../db.js';
import System from '../models/System.js';
import * as yup from 'yup';

class SystemController {
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
    async create(req, res) {
        (async () => {
            try {
                const resultCreate = await System.create({
                    title: 'Animais 4',
                    description: 'Um sistema especialista em animais 4'
                });
                console.log(resultCreate);
            } catch (error) {
                console.log(error);
            }
        })();
    }
    async run(req, res) {

    }
}

export { SystemController };