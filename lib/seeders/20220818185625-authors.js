'use strict';
const db = require('../models');

module.exports = {
  async up() {
    //removed from params: queryInterface, Sequelize
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Genre.bulkCreate([
      {
        first_name: 'Kameron',
        last_name: 'Hurley',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Sylvia',
        last_name: 'Plath',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'Neil',
        last_name: 'Gaiman',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: 'David',
        last_name: 'Sedaris',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    //removed from params: queryInterface, Sequelize
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
