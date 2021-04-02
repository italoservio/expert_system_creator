import sequelize from '../db.js';
import Sistema from '../models/Sistema.js';
import * as yup from 'yup';

class SistemaController {
    async index(req, res) {
        res.render('index', {
            layout: 'layouts/default',
            bg: 'bg-lime'
        });
    }
    async sistema(req, res) {
        res.render('manage', {
            layout: 'layouts/default',
            bg: 'bg-primary'
        });
    }
    async create(req, res) {
        (async () => {
            try {
                const resultadoCreate = await Sistema.create({
                    titulo: 'Animais 4',
                    descricao: 'Um sistema especialista em animais 4'
                });
                console.log(resultadoCreate);
            } catch (error) {
                console.log(error);
            }
        })();
    }
}

export default SistemaController;