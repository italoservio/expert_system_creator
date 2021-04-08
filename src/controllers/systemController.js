import sequelize from '../db.js';
import System from '../models/System.js';
import * as yup from 'yup';

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
        res.json(req.body);
        // (async () => {
        //     try {
        //         const resultCreate = await System.create({
        //             title: 'Animais 4',
        //             description: 'Um sistema especialista em animais 4'
        //         });
        //         console.log(resultCreate);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // })();
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
            res.json({
                id: 1,
                name: 'Animais',
                description: 'Sistema especialista em identificar animais',
                elements: [
                    {
                        id: 1,
                        element: 'Gato',
                        questions: []
                    }
                ]
            });
        } else {
            // Get all systems whitout elements
            res.json([{
                id: 1,
                name: 'Animais',
                description: 'Sistema especialista em identificar animais'
            }]);
        }
    }
    async run(req, res) {
        res.send('system');
    }
}

export { SystemController };