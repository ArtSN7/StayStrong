const { Sequelize } = require('sequelize');

// Initialize SQLite database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/strong.db', // Database file
});

module.exports = sequelize;