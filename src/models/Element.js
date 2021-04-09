import pkg from 'sequelize';
import System from './System.js';
import sequelize from '../db.js';

const { DataTypes } = pkg;
const Element = sequelize.define('element', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    element: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default Element;