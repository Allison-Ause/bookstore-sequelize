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
    await db.Books.bulkCreate([
      {
        title: 'Stars Are Legion',
        genre: 'Sci-Fi',
        publisher: 'Tor',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Gods War',
        genre: 'Horror',
        publisher: 'Tor',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Mirror Empire',
        genre: 'Sci-Fi',
        publisher: 'Tor',
        author_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'The Bell Jar',
        genre: 'Drama',
        publisher: 'Random House',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Poems: Vol 3',
        genre: 'Poetry',
        publisher: 'Random House',
        author_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'American Gods',
        genre: 'Fantasy',
        publisher: 'Tor Fantasy',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Anansi Boys',
        genre: 'Fantasy',
        publisher: 'Tor Fantasy',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'When You Are Engulfed In Flames',
        genre: 'Short Stories',
        publisher: 'Little Brown',
        author_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Me Talk Pretty One Day',
        genre: 'Short Stories',
        publisher: 'Little Brown',
        author_id: 3,
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
