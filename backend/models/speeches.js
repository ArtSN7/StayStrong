// model for db for messages

const { DataTypes } = require('sequelize');
const sequelize = require('./index');


const Speech = sequelize.define('Speeches', {
    id : { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    content: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: false
});

module.exports = Speech;