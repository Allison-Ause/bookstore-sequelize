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
        title: 'Stars Are Legion',
        genre: 'Sci-Fi',
        publisher: 'Tor',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '',
        genre: 'Hurley',
        publisher: 'Hurley',
        author_id: 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kameron',
        genre: 'Hurley',
        publisher: 'Hurley',
        author_id: 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Kameron',
        genre: 'Hurley',
        publisher: 'Hurley',
        author_id: 
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
