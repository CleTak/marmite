const { Sequelize } = require('sequelize');

const connection = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

connection
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection failed:', err.message));

module.exports = connection;
