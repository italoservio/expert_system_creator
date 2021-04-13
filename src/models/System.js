import pkg from 'sequelize';
import { sequelize } from '../db.js';

const { DataTypes } = pkg;
const System = sequelize.define('system', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdBy: DataTypes.STRING,
    description: DataTypes.STRING
});

export default System;